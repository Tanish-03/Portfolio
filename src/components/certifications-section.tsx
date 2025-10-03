import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const certifications = [
    {
        id: 1,
        title: "Microsoft Certified: Azure Data Engineer Associate",
        issuer: "Microsoft",
        issueDate: "Jul 2024",
        expiryDate: "Jul 2025",
        credentialId: "1E5DCA5295126108",
        icon: "logos:microsoft",
        credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/Tanish-5116/1E5DCA5295126108?sharingId"
    },
    {
        id: 2,
        title: "Creating a Business Plan",
        issuer: "LinkedIn",
        issueDate: "Apr 2022",
        expiryDate: null,
        credentialId: null,
        icon: "logos:linkedin-icon",
        credentialUrl: "https://www.linkedin.com/learning/creating-a-business-plan-2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDUFIM9d7TKKIEwiNeXPInw%3D%3D"
    }
];

export const CertificationsSection: React.FC = () => {
    return (
        <section id="certifications" className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Certifications
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Professional Credentials
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Industry-recognized certifications and licenses that validate my professional expertise and commitment to continuous learning.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            className="group"
                        >
                            <Card className="shadow-2xl h-full hover:shadow-3xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 group-hover:scale-[1.02]">
                                <CardHeader className="pb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Icon icon={cert.icon} width={32} className="text-primary" />
                                        </div>
                                        <div className="flex-grow">
                                            <CardTitle className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </CardTitle>
                                            <div className="text-primary font-semibold text-sm">{cert.issuer}</div>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                <Icon icon="lucide:calendar" width={16} />
                                                <span>Issued {cert.issueDate}</span>
                                            </div>
                                            {cert.expiryDate && (
                                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                    <Icon icon="lucide:clock" width={16} />
                                                    <span>Expires {cert.expiryDate}</span>
                                                </div>
                                            )}
                                            {cert.credentialId && (
                                                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                                                    <Icon icon="lucide:hash" width={14} />
                                                    <span>ID: {cert.credentialId}</span>
                                                </div>
                                            )}
                                        </div>

                                        <Button
                                            variant="outline"
                                            onClick={() => window.open(cert.credentialUrl, "_blank")}
                                            className="w-full font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        >
                                            <Icon icon="lucide:external-link" width={16} className="mr-2" />
                                            View Credential
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection; 