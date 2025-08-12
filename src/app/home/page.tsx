import PageContainerMobile from '@/components/layout/Mobile/page-container-mobile';
import { Card } from '@/components/ui/card';
import { IconAIFill, IconDevice, IconGlobe } from '@/lib/icons';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowUp,
  IconChevronRight,
  IconMapPinFilled,
  IconPointFilled
} from '@tabler/icons-react';
import Image from 'next/image';

export default async function Page() {
  return (
    <PageContainerMobile scrollable={false}>
      <header className='z-1 flex h-full w-full items-center justify-between'>
        <IconArrowLeft size={24} color='white' />
        <p className='font-500 text-base text-white'>
          IndiHome Troubleshooting
        </p>
        <div className='min-w-6'></div>
      </header>
      <section className='from-telkomsel-red-one to-telkomsel-red-two absolute top-0 left-0 z-0 h-14 h-[300px] w-full rounded-br-4xl bg-linear-to-b'>
        <div className='flex h-full flex-col items-center justify-center'>
          <Image
            src='/assets/img-router-indihome.svg'
            alt='IndiHome router illustration'
            width={158}
            height={158}
          />
          <div className='flex bg-white/30 w-[160px] rounded-4xl px-2 py-2 overflow-hidden absolute bottom-[3rem]'>
            <div className="flex items-center gap-2">
              <IconMapPinFilled size={20} color="#FFF" />
              <div className="flex flex-col truncate">
                <p className="text-[12px] text-white">Lokasi Perangkat</p>
                <p className='text-sm text-white truncate w-28'>Jl. Melati Raya No.42</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='absolute top-80 left-0 w-full'>
        <div className='flex flex-col gap-5 px-5'>
          <Card>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                  <Image
                    src={IconGlobe}
                    alt='ico-globe'
                    width={24}
                    height={24}
                  />
                  <p>Status Jaringan</p>
                </div>
                <IconChevronRight size={20} />
              </div>
              <div className='flex items-center gap-1'>
                <IconPointFilled size={16} color='#34C759' />
                <p className='text-xs font-normal'>
                  Kekuatan jaringan dalam kondisi{' '}
                  <span className='text-telkomsel-accent-green'>baik.</span>
                </p>
              </div>
              <div className='flex flex-row justify-between gap-[16px]'>
                <div className='flex min-w-[110px] items-center gap-2'>
                  <IconArrowDown size={24} color='#008E53' />
                  <div className='flex flex-col items-center'>
                    <p className='mb-[2px]'>
                      <span className='text-base font-semibold'>30.9</span>
                      <span className='ml-1 text-sm'>Mbps</span>
                    </p>
                    <span className='text-xs text-gray-500'>Download</span>
                  </div>
                </div>
                <div className='flex min-w-[110px] items-center gap-2'>
                  <IconArrowUp size={24} color='#008E53' />
                  <div className='flex flex-col items-center'>
                    <p className='mb-[2px]'>
                      <span className='text-base font-semibold'>420</span>
                      <span className='ml-1 text-sm'>kbps</span>
                    </p>
                    <span className='text-xs text-gray-500'>Upload</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                  <Image
                    src={IconDevice}
                    alt='ico-device'
                    width={24}
                    height={24}
                  />
                  <p>Perangkat Terhubung</p>
                </div>
                <IconChevronRight size={20} />
              </div>
              <div className='mt-4'>
                <p className='text-sm'>
                  <span className='text-lg font-semibold'>12</span> perangkat
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="fixed bottom-0 left-0 w-full h-[116px] bg-white px-4 py-4 border-t-1 border-slate-400">
        <button className="bg-transparent border-red-500 border-2 text-red-500 font-semibold text-lg px-4 py-2 rounded-full w-full">
          Akses Smart Selfcare
        </button>
        <div className="flex gap-2">
          <Image
            src={IconAIFill}
            alt='ico-ail'
            width={24}
            height={24}
          />
          <p className="text-[10px] mt-2 text-slate-500">Smart Selfcare membantu Anda menyelesaikan permasalahan secara pribadi menggunakan teknologi AI.</p>
        </div>
      </section>
    </PageContainerMobile>
  );
}
