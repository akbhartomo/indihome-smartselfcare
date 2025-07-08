import PageContainerMobile from '@/components/layout/Mobile/page-container-mobile';
import { IconArrowLeft } from '@tabler/icons-react';
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
        <div className='h-full flex flex-col items-center justify-center'>
          <Image
            src='/assets/img-router-indihome.svg'
            alt='IndiHome router illustration'
            width={132}
            height={88}
          />
          <button className='rounded-full bg-white px-6 py-2 text-sm font-semibold text-telkomsel-red-one shadow-md transition-colors hover:bg-gray-100'>
            <p>Save</p>
          </button>
        </div>
      </section>
      <section className='w-full absolute top-80 left-0'>
        <div className="flex flex-col gap-5 px-5">
          <div className='flex flex-col h-[128px] bg-background rounded-xl p-3 border-telkomsel-grey-border border'>
            <p>Status Jaringan</p>
          </div>
          <div className='flex flex-col h-[128px] bg-background rounded-xl p-3 border-telkomsel-grey-border border'>
            <p>Perangkat Terhubung</p>
          </div>
        </div>
      </section>
    </PageContainerMobile>
  );
}
