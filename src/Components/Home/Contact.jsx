import { Box, Flex, Text, Input, Heading, Textarea, Button } from "@chakra-ui/react"
import emailjs from '@emailjs/browser';
import { FaGripLines } from 'react-icons/fa';
// import React, { } from "react";
import { Formik, Field, Form, useFormik } from "formik";
import validationSchema from "../../Schema/Validation";
import { useRef } from "react";
import { useToast } from '@chakra-ui/react'

const initialValues = {
    name: "",
    email: "",
    subject: "",
    description: "",
}


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9lkgksb', 'template_nmlc0wu', form.current, 'zJcqBLdibi1muwoi_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSubmitWrapper = async (values, formik) => {
        try {
          // Call your functions here
          await sendEmail(values);
          // Call the original handleSubmit
          await formik.handleSubmit(values, formik);
          // If you need to perform any other actions after form submission
        } catch (error) {
          // Handle any errors that may occur during the process
          console.error(error);
        }
      };

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            toast({
                title: 'Message sent',
                description: "We will be contacting you soon.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    });


    const toast = useToast()

    return (
        // Contact Us
        <Box id="Contact" py={20} w={'80%'} mx={'auto'}>
            <Flex direction={'column'} alignItems={'center'}>
                <Flex justify={'center'} data-aos="slide-up" data-aos-duration="12000">
                    <Heading color={'#000'} fontFamily='Lobster' fontSize={40} borderBottom={'2px solid #f7a010'}>Contact Us</Heading>
                </Flex>
                <Box mt={4}>
                    <FaGripLines fontSize={30} />
                </Box>
                <Text pt={4} textAlign={'center'} data-aos="slide-up" data-aos-duration="10000" >Tell Us About Your Project. We’ll Be In Touch Soon.</Text>
            </Flex>

            {/* Form */}
            <Formik >
                <Box w={{ base: '100%', md: '60%' }} boxShadow='2xl' mx={'auto'} my={'10'} data-aos="slide-up" data-aos-duration="8000" >
                    <Flex bgColor={"white"} justifyContent={'center'} py={10} w={'90%'} mx={'auto'}>
                        <Form onSubmit={(e) => handleSubmitWrapper(e, { handleSubmit })} ref={form}>
                            <Flex justify={'center'} mx={'auto'} direction={{ base: 'column', lg: 'row' }} gap={{ base: 0, lg: 4 }}  >
                                <Flex direction={'column'} >
                                    <Field
                                        as={Input}
                                        type='text'
                                        placeholder='First Name'
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? (<Text fontSize={12} color="red">{errors.name}</Text>) : null}
                                </Flex>
                                <Flex direction={'column'}>
                                    <Field
                                        as={Input}
                                        type='email'
                                        placeholder='Email'
                                        mt={{ base: 8, lg: 0 }}
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? (<Text fontSize={12} color="red">{errors.email}</Text>) : null}
                                </Flex>
                            </Flex>
                            <Box justify={'center'} mt={8}>
                                <Field
                                    as={Input}
                                    type='text'
                                    placeholder='Subject'
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.subject && touched.subject ? (<Text fontSize={12} color="red">{errors.subject}</Text>) : null}
                            </Box>
                            <Box justify={'center'} mt={8}>
                                <Field
                                    as={Textarea}
                                    placeholder='Description'
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.description && touched.description ? (<Text fontSize={12} color="red">{errors.description}</Text>) : null}
                            </Box>
                            <Flex justify={'center'}>
                                <Button
                                    bgColor={'#231f20'}
                                    _hover={{ bgColor: '#cf130c', transition: 'all .3s', cursor: 'pointer' }}
                                    color={'white'}
                                    rounded={4}
                                    w={{ base: '100%', sm: '60%', lg: '50%' }}
                                    mt={6}
                                    h={10}
                                    fontSize={{ base: 12, md: 16 }}
                                    type="submit"
                                >Let's Start A Conversation</Button>
                            </Flex>
                        </Form>
                    </Flex>
                </Box>
            </Formik>
        </Box>
    )
}

// from_name