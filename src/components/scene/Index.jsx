'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import Section from '../section';

export default function Index() {

    return (
        <>
            <div className="w-full h-full absolute inset-0 -z-10">
                <Canvas className='w-full h-full' >
                    <Model />
                    <directionalLight intensity={2} position={[0, 2, 3]} />
                    <Environment preset="city" />
                </Canvas>
                <Section bgColor='blue'>
                    <div className='flex flex-col'>
                        <div className='bg-slate-600'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                        <div className='bg-lime-600 mt-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                        <div className='bg-blue-600 mt-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                    </div>

                </Section>

                <Section bgColor='yellow'>
                    <div className='flex flex-col'>
                        <div className='bg-slate-600'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                        <div className='bg-lime-600 mt-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                        <div className='bg-blue-600 mt-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam velit voluptatibus tempora delectus facere accusamus dolorem beatae voluptas, numquam officia repellat similique tempore rem asperiores iusto. Ab nisi voluptatem ipsam.


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum nam sapiente suscipit, iste consequuntur voluptatibus, nisi quisquam qui nobis fugiat dignissimos quasi reprehenderit animi minima quaerat hic officia ipsam!


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perferendis temporibus, provident animi, accusantium fugit ea neque exercitationem sequi enim, sunt nam maiores recusandae deserunt nulla ab reprehenderit magnam laborum?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores id, et voluptatem itaque magni rerum possimus similique nostrum voluptas, sapiente sunt ex quibusdam deserunt iusto debitis voluptates, porro est.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, tempora! Amet repellat exercitationem dignissimos tenetur debitis eligendi molestias, dolorum ipsum optio saepe quisquam obcaecati sunt commodi voluptatum assumenda quibusdam asperiores.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ad aliquid ipsam, rem hic quia eos temporibus nihil nobis dolorem debitis nisi! Eos quia harum doloremque asperiores, sint distinctio quod.
                        </div>
                    </div>

                </Section>
            </div>
        </>
    );
}
