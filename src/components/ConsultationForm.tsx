import React, { useState, useRef } from 'react';
import { Upload, X, CheckCircle, Calendar, Clock, MessageCircle, AlertCircle, FileText } from 'lucide-react';
import { STUDIO_CONFIG, BODY_PLACEMENTS, SIZE_PRESETS } from '../data/studioData';
import { ConsultationFormData } from '../types/tattoo';

interface ConsultationFormProps {
  initialTattooIdea?: string;
  initialPlacement?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialTattooIdea = '',
  initialPlacement = ''
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    tattooIdea: initialTattooIdea,
    approximateSize: 'Small Custom Piece (2 - 4 inches)',
    placement: initialPlacement || BODY_PLACEMENTS[0],
    referenceImage: null,
    referenceImagePreview: null,
    preferredDate: '',
    preferredTimeSlot: '11:00 AM – 1:00 PM',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const timeSlots = [
    '9:30 AM – 11:30 AM',
    '11:30 AM – 1:30 PM',
    '2:00 PM – 4:00 PM',
    '4:00 PM – 6:30 PM',
    '6:30 PM – 8:30 PM',
    '8:30 PM – 10:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, referenceImage: 'Image must be under 10MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          referenceImage: file,
          referenceImagePreview: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      referenceImage: null,
      referenceImagePreview: null
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.tattooIdea.trim()) {
      newErrors.tattooIdea = 'Please describe your tattoo idea or concept';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate pristine processing
    setTimeout(() => {
      const generatedRef = 'GTS-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(generatedRef);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 700);
  };

  const handleSendToWhatsApp = () => {
    if (!validate()) return;

    const message = encodeURIComponent(
      `*New Tattoo Consultation Inquiry — GANGSTER TATTOO STUDIO*\n\n` +
      `• *Client Name:* ${formData.fullName}\n` +
      `• *Phone:* ${formData.phoneNumber}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Tattoo Concept:* ${formData.tattooIdea}\n` +
      `• *Size:* ${formData.approximateSize}\n` +
      `• *Body Placement:* ${formData.placement}\n` +
      `• *Preferred Date/Slot:* ${formData.preferredDate || 'Flexible'} (${formData.preferredTimeSlot})\n` +
      (formData.referenceImage ? `• *Reference:* (I have a reference image ready to send in this chat)\n` : '') +
      `\nLooking forward to discussing the custom artwork and quote with Rony!`
    );

    window.open(`https://wa.me/91${STUDIO_CONFIG.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="consultation" className="py-24 bg-[#09090C] relative border-t border-[#1C1A18]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C5A880]">
            Bespoke Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] font-heading text-balance">
            Book Your Custom Tattoo Consultation
          </h2>
          <p className="text-sm text-[#A8A296] max-w-xl mx-auto">
            Tell us about your concept, size, and anatomical placement. Rony A will personally review your ideas and collaborate with you on an exclusive custom design.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#121217] border border-[#2B2925] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {submissionSuccess ? (
            /* Success confirmation screen */
            <div className="text-center py-12 space-y-6 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880] text-[#C5A880] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C5A880]">
                  Consultation Request Received
                </div>
                <h3 className="text-2xl font-bold text-[#FDFBF7] font-heading">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-[#A8A296] max-w-md mx-auto">
                  Your reference ID is <strong className="text-[#EDE8DF]">{referenceNumber}</strong>. Rony A will review your tattoo dimensions and concept and reach out via phone/WhatsApp within 24 hours.
                </p>
              </div>

              {/* Consultation Summary Card */}
              <div className="bg-[#0B0B0E] border border-[#262420] rounded-lg p-5 text-left text-xs max-w-md mx-auto space-y-2 text-[#A8A296]">
                <div className="flex justify-between border-b border-[#1E1C1A] pb-2">
                  <span>Tattoo Placement:</span>
                  <span className="text-[#EDE8DF] font-medium">{formData.placement}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E1C1A] pb-2">
                  <span>Size Estimate:</span>
                  <span className="text-[#EDE8DF] font-medium">{formData.approximateSize}</span>
                </div>
                <div className="flex justify-between border-b border-[#1E1C1A] pb-2">
                  <span>Base Pricing:</span>
                  <span className="text-[#C5A880] font-semibold">Starts from ₹{STUDIO_CONFIG.startingPriceINR}</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio Hours:</span>
                  <span className="text-[#EDE8DF]">{STUDIO_CONFIG.openingHours}</span>
                </div>
              </div>

              {/* Instant WhatsApp bridge button */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <button
                  onClick={handleSendToWhatsApp}
                  className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send This Request Directly on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setSubmissionSuccess(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      email: '',
                      tattooIdea: '',
                      approximateSize: 'Small Custom Piece (2 - 4 inches)',
                      placement: BODY_PLACEMENTS[0],
                      referenceImage: null,
                      referenceImagePreview: null,
                      preferredDate: '',
                      preferredTimeSlot: '11:00 AM – 1:00 PM',
                      additionalNotes: ''
                    });
                  }}
                  className="px-6 py-3 text-xs font-medium tracking-wider uppercase text-[#EDE8DF] border border-[#3E3A34] hover:border-[#C5A880] rounded-md transition-colors"
                >
                  Submit Another Consultation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Field Group 1: Contact Details */}
              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C5A880] border-b border-[#23211F] pb-2">
                  01. Client Contact Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full bg-[#0B0B0E] border rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] placeholder-[#6A655C] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D2A26] focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. 85901 85807"
                      className={`w-full bg-[#0B0B0E] border rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] placeholder-[#6A655C] focus:outline-none transition-colors ${
                        errors.phoneNumber ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D2A26] focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.phoneNumber && <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. client@example.com"
                    className={`w-full bg-[#0B0B0E] border rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] placeholder-[#6A655C] focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D2A26] focus:border-[#C5A880]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Field Group 2: Tattoo Concept & Specifications */}
              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C5A880] border-b border-[#23211F] pb-2">
                  02. Custom Tattoo Specifications
                </div>

                {/* Tattoo Idea */}
                <div>
                  <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                    Tattoo Idea, Theme & Story *
                  </label>
                  <textarea
                    name="tattooIdea"
                    rows={4}
                    value={formData.tattooIdea}
                    onChange={handleInputChange}
                    placeholder="Describe your design concept (e.g. Gothic blackwork panther on inner forearm, vintage lettering quote with filigree, realistic tiger with geometric framing)..."
                    className={`w-full bg-[#0B0B0E] border rounded-lg p-3 text-xs text-[#EDE8DF] placeholder-[#6A655C] focus:outline-none transition-colors ${
                      errors.tattooIdea ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D2A26] focus:border-[#C5A880]'
                    }`}
                  />
                  {errors.tattooIdea && <p className="text-[11px] text-red-400 mt-1">{errors.tattooIdea}</p>}
                  <p className="text-[11px] text-[#857F73] mt-1">
                    Remember: We craft 100% custom designs starting from ₹500. Share any personal symbolism or elements you'd love included.
                  </p>
                </div>

                {/* Size & Placement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Approximate Dimensions / Size
                    </label>
                    <select
                      name="approximateSize"
                      value={formData.approximateSize}
                      onChange={handleInputChange}
                      className="w-full bg-[#0B0B0E] border border-[#2D2A26] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                    >
                      {SIZE_PRESETS.map((p) => (
                        <option key={p.label} value={p.label}>
                          {p.label} ({p.priceNote})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Body Placement
                    </label>
                    <select
                      name="placement"
                      value={formData.placement}
                      onChange={handleInputChange}
                      className="w-full bg-[#0B0B0E] border border-[#2D2A26] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                    >
                      {BODY_PLACEMENTS.map((place) => (
                        <option key={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reference Image Upload */}
                <div>
                  <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                    Reference Image or Sketch (Optional)
                  </label>
                  
                  {formData.referenceImagePreview ? (
                    <div className="flex items-center gap-4 p-3 bg-[#0B0B0E] border border-[#2D2A26] rounded-lg">
                      <img
                        src={formData.referenceImagePreview}
                        alt="Uploaded preview"
                        className="w-16 h-16 object-cover rounded border border-[#3E3A34]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-[#EDE8DF] truncate">
                          {formData.referenceImage?.name}
                        </p>
                        <p className="text-[11px] text-[#8C867B]">
                          {(formData.referenceImage?.size ? (formData.referenceImage.size / 1024).toFixed(1) + ' KB' : '')}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="p-1.5 text-zinc-400 hover:text-red-400 rounded-md hover:bg-zinc-800 transition-colors"
                        title="Remove image"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-[#3D3A34] hover:border-[#C5A880] bg-[#0B0B0E]/60 rounded-lg p-6 text-center cursor-pointer transition-colors group"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Upload className="w-6 h-6 text-[#8C867B] group-hover:text-[#C5A880] mx-auto mb-2 transition-colors" />
                      <div className="text-xs text-[#EDE8DF] font-medium">
                        Click to upload reference image or sketch
                      </div>
                      <div className="text-[11px] text-[#7A7468] mt-1">
                        PNG, JPG or WEBP up to 10MB
                      </div>
                    </div>
                  )}
                  {errors.referenceImage && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.referenceImage}</p>
                  )}
                </div>
              </div>

              {/* Field Group 3: Scheduling Preference */}
              <div className="space-y-4">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C5A880] border-b border-[#23211F] pb-2">
                  03. Preferred Schedule
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#0B0B0E] border border-[#2D2A26] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#EDE8DF] uppercase tracking-wider mb-1.5">
                      Preferred Time Slot (Open 9:30 AM – 10:00 PM)
                    </label>
                    <select
                      name="preferredTimeSlot"
                      value={formData.preferredTimeSlot}
                      onChange={handleInputChange}
                      className="w-full bg-[#0B0B0E] border border-[#2D2A26] rounded-lg px-3.5 py-2.5 text-xs text-[#EDE8DF] focus:outline-none focus:border-[#C5A880]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submission CTA Buttons */}
              <div className="pt-4 border-t border-[#23211F] flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-black bg-[#C5A880] hover:bg-[#D4BA94] active:scale-[0.99] rounded-md transition-all shadow-lg shadow-[#C5A880]/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing Consultation...</span>
                  ) : (
                    <span>Confirm & Submit Consultation</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#20ba5a] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
