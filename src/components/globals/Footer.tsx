import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const Footer: NextPage = () => {
  const router = useRouter()

  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-2xl font-bold">
          All rights reserveds ₢ NeverMiss 2022
        </p>
        <button
          className="filter grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
          onClick={() => router.push('https://agencianovageracao.com.br/')}
        >
          <svg
            width="61"
            height="40"
            viewBox="0 0 61 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.74367 28.5714H0V0H5.74367V1.42858C6.70094 0.47619 8.6155 0 11.4873 0H17.231C22.9747 0 25.8466 2.85714 25.8466 8.57143V28.5714H20.1028V8.57143C20.1028 6.66667 19.1456 5.71429 17.231 5.71429H11.4873C7.65822 5.71429 5.74367 7.14286 5.74367 9.99999V28.5714ZM61 31.4286C61 37.1428 58.1282 40 52.3846 40H38.0253V34.2857H52.3846C54.2991 34.2857 55.2563 33.3333 55.2563 31.4286V28.5714H43.769C38.0253 28.5714 35.1536 25.7142 35.1536 20.0001V8.57143C35.1536 2.85714 38.0253 0 43.769 0H61V31.4286ZM55.2563 22.8571V5.71429H43.769C41.8544 5.71429 40.8972 6.66667 40.8972 8.57143V20.0001C40.8972 21.9047 41.8544 22.8571 43.769 22.8571H55.2563Z"
              fill="white"
            />
            <path
              d="M55.2563 5.71429V22.8571H43.769C41.8544 22.8571 40.8972 21.9047 40.8972 20.0001V8.57143C40.8972 6.66667 41.8544 5.71429 43.769 5.71429H55.2563Z"
              fill="#18FF6D"
            />
          </svg>
        </button>
      </div>
    </footer>
  )
}
