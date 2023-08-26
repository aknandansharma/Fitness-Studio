import React from "react";
import "./services.css";

const Services = () => {
    return (
        <div className='bg-white'>
            <img
                src='https://i.ibb.co/ryW2896/final-photo.png'
                alt='Page pic'
                className='w-full imageControl'
            />
            <h2 className='text-2xl font-semibold mt-8 mx-4 text-center'>
                These services are offered by us.
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                <ServiceCard
                    image='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJhcGp3dzE2NGxqZ250bXpiYW5pYjYxdjIyeGkwc253YXBlbzM4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loG7TbqLitOPTVfg3o/giphy.gif'
                    title='YOGA'
                    description='Yoga, an ancient practice rooted in India, unites body, mind, and soul. Through physical postures (asanas), controlled breathing (pranayama), and meditation, it fosters holistic well-being. '
                    link='service1'
                />
                <ServiceCard
                    image='https://media4.giphy.com/media/cM1axtlW4w6M1Q9m2H/200w.webp?cid=ecf05e47ijj692d9pas9g2wcco81rwyf34r8fitop4f57qyr&ep=v1_gifs_search&rid=200w.webp&ct=g'
                    title='ZUMBA'
                    description='Zumba, a dynamic and exhilarating fitness phenomenon, infuses dance with exercise to create a unique and enjoyable workout experience.'
                    link='service2'
                />
                <ServiceCard
                    image='https://media2.giphy.com/media/QZE1v890QSpGwWjgdO/giphy.webp?cid=ecf05e47s80pg6dltkumm6utqn3ervgsz119ysz0t2iqhm1h&ep=v1_gifs_search&rid=giphy.webp&ct=g'
                    title='PILATES'
                    description='Pilates exercises primarily target the deep muscles of the abdomen, back, and pelvis, known as the "powerhouse." '
                    link='service3'
                />
                <ServiceCard
                    image='https://media1.giphy.com/media/17mGDCFnG3592dnoHa/giphy.webp?cid=ecf05e47briu10s0398ytjncxj65ev84lyyuseap94snks9n&ep=v1_gifs_search&rid=giphy.webp&ct=g'
                    title='MEDITATION'
                    description='Meditation, a timeless practice with roots in ancient traditions such as Buddhism, Hinduism, and Taoism, is a technique that cultivates mindfulness, self-awareness, and inner tranquility. '
                    link='service4'
                />
                <ServiceCard
                    image='https://media3.giphy.com/media/RvGJFfFGVzjgU0TT4P/200.webp?cid=ecf05e47ml8q5j7fa7l39hza60pvanrrr3yv0hxygdiinzcj&ep=v1_gifs_search&rid=200.webp&ct=g'
                    title='NUTRITION'
                    description='Nutrition, the fundamental aspect of human well-being, revolves around the intake of nutrients from food and its impact on our health. It plays a vital role in maintaining bodily functions, supporting growth, and preventing various diseases. '
                    link='service5'
                />
                <ServiceCard
                    image='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm1ncDQzZXpmb2xiNHZueDA3ZGoyem85MW13Y3d6b3lpMnF4aXY2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GZbgYa0mVQoBKrnuYT/giphy.gif'
                    title='ENROLL NOW'
                    description='Are you ready to embark on a journey of health, strength, and transformation? Look no further – our Fitness Studio is here to guide you towards your wellness goals.'
                    link='service6'
                />
            </div>

            <h2 className='text-2xl font-semibold mt-8 mx-4 text-center'>
                Meet Our Teams
            </h2>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                <SocialProfileCard
                    image='https://lh3.googleusercontent.com/pw/AIL4fc-4mX1xiH_W761ALuGdr7tgI5nSWh7XBRoLOyJNZnpuyArNvvdfhEk3NoyOMs1OF3Qi8NZVjxY8K50vvZOUgaRSnr3NV-V7QZx9r1ZXQvxg5w7QCJhicy-_l6bHfm8YPA6QLjDZjMaqG8a-mXMEcYF7uA5AmoCkzFPxmIv-l9L46ttWvc7I-tWrleGviAkSd0huNwToD2j6pJaj3UrrGwJ2cuAIxFfELBpUh9FwhR0FoJdxjHUQd3GUK95RkWFnvS8O6hNn8O8FwPG6drLyMhixUfWe0xQBL5bpKFgR4NmSYwTHGsLqkRP_H7Pa-VdWaL5FYFi8tT39bN0IxP4qcdB7QCIwEwv51FPGs8tPvpLXj5OmAhlt4t56FPAYPq1tNbm_NaJ16lnj9Lf3GyJbxoD3ufQmPl93QypqXCdXMmZ4E244VklITXfDeGU4yI5gNODyHr-6NnbhETmxeKRYzEcTaDOXdZwcMhIwy_Fqeee-vfP_93Y0krYFJrM-3yRMDz-JYYggv-GOvwReiLltgtDs0lCY6X1mya5zlI8coh9YAx3XAPqgwXayxfnZoIwJrPxgmKkLelVLgcBK4eC9CQ50HhUJCK2xPMSotsW-Tdmuuza46o6pPxm23R1stpvQK_oxyXR9yel5HhbT7pzeO0rKEQAR0j7CbtLvBPpr9klbGm-3HFPHZs65m3dgJwml-_ZXGOH8ftdIRF11XOccKNurtNxb1F7lz01SFJdDRi_2TxI069WbyTkYy_1V8i3LnesYmQbYOPN78J3Y1G4msIfxbwNYfJO6pruvYIeFgfgCqETgTIaUK7_wzK_lxl2_JZo0vHRI-S3VXqfD0TcR8G7Ho7k7YnNKbJmKF_H5g352yb-U5W8e4cYo8vuFDyB3qfPq-rXEZKT0bGId0FDAz4xpDfk=w650-h649-s-no?authuser=0'
                    name='Aknandan Sharma'
                    designation='Full Stack Developer (MERN)'
                    link='https://aknandansharma.github.io/aknandan/'
                />
                <SocialProfileCard
                    image='https://avatars.githubusercontent.com/u/108613361?v=4'
                    name='Abhilasha Tiwari'
                    designation='Frontend Developer'
                    link='https://github.com/Abhilasha1197'
                />
                <SocialProfileCard
                    image='https://avatars.githubusercontent.com/u/66622782?v=4'
                    name='Abdul Ahad'
                    designation='Full Stack Developer (MERN)'
                    link='https://github.com/ahadiraqui'
                />
                <SocialProfileCard
                    image='https://avatars.githubusercontent.com/u/117986493?v=4'
                    name='Nandini Kamble'
                    designation='Frontend Developer'
                    link='https://github.com/nandinikamble12'
                />
            </div>
        </div>
    );
};

const ServiceCard = ({ image, title, description, link }) => {
    return (
        <div className='bg-gray-100 p-4 serviceContainer'>
            <img src={image} alt={title} className='w-full servicesIMG' />
            <h3 className='text-lg font-semibold mt-4'>{title}</h3>
            <p className='mt-2'>{description}</p>
            <a href={link} className='text-blue-500 hover:underline mt-4'>
                Know More
            </a>
        </div>
    );
};

const SocialProfileCard = ({ image, name, designation, link }) => {
    return (
        <div className='bg-white p-4 text-center'>
            <img
                src={image}
                alt={name}
                className='w-full rounded-full profileIMG'
            />
            <h3 className='text-lg font-semibold mt-4'>{name}</h3>
            <p className='text-gray-500'>{designation}</p>
            <a
                href={link}
                target='_blank'
                className='text-blue-500 hover:underline mt-4'>
                Go to Profile
            </a>
        </div>
    );
};

export default Services;
