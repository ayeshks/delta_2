<template>
  <section class="why-fly-section">
    <FluidAnimation />
    <div class="decorative-bg-left"></div>
    <div class="decorative-bg-right"></div>
    <div class="bottom-right-triangle"></div>

    <div class="bottom-right-geo">
      <img src="@/assets/client-feedback/bg-decorative-rightconner.png" alt="" />
    </div>

    <div class="left-bottom-geo">
      <img src="@/assets/getintouch/bg-geometric-2.png" alt="" />
    </div>

    <div class="container" :class="{ 'container-loaded': isContainerLoaded }" ref="containerRef">
      <div class="section-header">
        <p class="section-label">WHY FLY WITH US?</p>
        <h2 class="section-title">
          <span class="title-bold">Safety-First Aerial Operations,</span>
          <span class="title-light">Backed by Experience</span>
        </h2>
        <p class="section-subtitle">
          Every mission is planned by licensed pilots and backed by robust safety procedures.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="78" height="78" viewBox="0 0 78 78" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_53_49)">
                <path
                  d="M54.01 57.1828H50.4659C50.4717 57.1399 50.4893 57.1019 50.4893 57.0599C50.4893 56.5169 50.0486 56.0771 49.5065 56.0771C48.9634 56.0771 48.5237 56.5178 48.5237 57.0599C48.5237 57.1038 48.5422 57.1418 48.548 57.1828H45.0049C44.8606 57.1828 44.7358 57.2832 44.7056 57.4236C44.6753 57.565 44.7475 57.7073 44.8781 57.7668L48.9975 59.6417C49.3193 59.789 49.6898 59.789 50.0115 59.6417L54.1309 57.7668C54.2625 57.7083 54.3337 57.564 54.3044 57.4236C54.2781 57.2832 54.1533 57.1828 54.01 57.1828Z"
                  fill="#DCC62D" />
                <path
                  d="M28.2496 14.4964H49.7523C52.4043 14.4964 54.5542 12.3465 54.5542 9.69455V9.14855C54.5542 6.95967 53.2311 4.99017 51.205 4.16337L42.8659 0.757697C40.3894 -0.252403 37.6126 -0.252403 35.1361 0.756722L26.7959 4.16337C24.7699 4.99115 23.4468 6.96065 23.4468 9.14855V9.69455C23.4468 12.3465 25.5967 14.4964 28.2496 14.4964ZM34.4984 7.7972H38.0416C38.0357 7.75527 38.0172 7.71725 38.0172 7.67435C38.0172 7.13127 38.4579 6.69252 39 6.69252C39.5431 6.69252 39.9828 7.13322 39.9828 7.67435C39.9828 7.7192 39.9633 7.75722 39.9584 7.7972H43.5025C43.6449 7.7972 43.7707 7.89762 43.8019 8.03802C43.8311 8.18037 43.7599 8.32175 43.6283 8.3822L39.507 10.2571C39.1852 10.4043 38.8147 10.4043 38.493 10.2571L34.3726 8.38317C34.242 8.3237 34.1698 8.18037 34.2001 8.039C34.2303 7.89762 34.3541 7.7972 34.4984 7.7972Z"
                  fill="#DCC62D" />
                <path
                  d="M39 20.863C47.5897 20.863 54.5522 17.937 54.5522 14.3246C54.5522 14.2759 54.5181 14.2369 54.4713 14.2281C54.4225 14.2183 54.3777 14.2447 54.3592 14.2895C53.2272 17.2116 46.7873 17.3315 38.999 17.3315C31.2087 17.3315 24.7689 17.2116 23.6379 14.2895C23.6213 14.2447 23.5745 14.2193 23.5267 14.2281C23.4799 14.2378 23.4458 14.2768 23.4458 14.3246C23.4468 17.935 30.4112 20.863 39 20.863Z"
                  fill="#DCC62D" />
                <path
                  d="M65.4828 66.9709C64.6063 49.9357 58.1742 41.4834 52.0171 37.8291C48.6407 42.2381 44.0055 44.8043 39.0009 44.8043C33.8967 44.8043 29.2236 42.2595 25.8725 37.8808C25.8696 37.8837 25.8647 37.8866 25.8579 37.8896C19.7417 41.5858 13.3905 50.0488 12.515 66.9709C12.3619 69.9788 14.3831 72.5615 17.0351 72.7361C17.1277 72.7439 22.2201 73.0012 22.2201 73.0012C25.2378 76.3231 31.2369 78.0001 38.8878 78.0001C46.094 78.0001 52.6138 76.5951 55.7777 73.0022C55.7777 73.0022 60.8711 72.7448 60.9676 72.737C63.6167 72.5625 65.6408 69.9797 65.4828 66.9709ZM34.0615 72.9486C30.143 72.4601 27.1663 71.3574 25.7467 69.7964L24.4724 68.3973V63.4248C24.4724 62.7667 23.9391 62.2324 23.2809 62.2324C22.6228 62.2324 22.0895 62.7667 22.0895 63.4248V68.2228C21.0648 68.1721 18.2226 68.0278 17.4836 67.9888C17.3997 67.8854 17.2681 67.628 17.2759 67.2146C17.4036 60.4569 19.5369 50.1668 25.3704 44.2885C27.9804 46.57 30.9951 48.1612 34.1941 48.9646C34.1044 49.337 34.0518 49.7222 34.0518 50.1219C34.0518 51.6439 34.7401 53.005 35.8214 53.9127L34.0615 72.9486ZM60.5172 67.9898C59.8308 68.0268 56.9467 68.1711 55.9103 68.2237V63.4258C55.9103 62.7677 55.376 62.2333 54.7188 62.2333C54.0597 62.2333 53.5274 62.7677 53.5274 63.4258V68.3466L52.2004 69.853C50.8598 71.3769 47.8997 72.4553 43.9383 72.9418L42.1803 53.9108C43.2597 53.0011 43.947 51.6439 43.947 50.1239C43.947 49.7251 43.8963 49.3419 43.8057 48.9704C46.9959 48.1739 50.0242 46.5934 52.6304 44.2914C57.9773 49.3156 60.68 60.3145 60.7248 67.2175C60.7278 67.629 60.601 67.8864 60.5172 67.9898Z"
                  fill="white" />
                <path
                  d="M24.9202 30.8032C27.5459 37.8427 32.8635 42.1863 39.0002 42.1863C45.4254 42.1863 50.4213 37.673 53.0772 30.8032C55.7809 30.5672 57.2775 27.924 57.8196 24.7484C58.4612 20.9976 57.1137 19.1705 54.7435 18.76C54.7094 18.3944 54.6723 18.0336 54.6314 17.6748C53.7617 18.6206 52.5273 19.463 50.9976 20.162C50.9069 21.8966 50.6807 23.2547 50.4652 24.4959C49.1382 32.1389 45.0403 37.7237 39.0002 37.7237C32.5857 37.7237 27.9398 31.3268 27.2777 22.2924C27.2241 21.5612 27.2992 20.2917 27.2992 20.2917C25.6349 19.5692 24.2962 18.683 23.3709 17.6768C23.3309 18.0346 23.2929 18.3944 23.2588 18.76C20.8876 19.1705 19.5411 20.9976 20.1807 24.7484C20.7199 27.887 22.1639 30.5477 24.9202 30.8032Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_53_49">
                  <rect width="78" height="78" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="feature-title">Professional Pilots</h3>
          <p class="feature-description">
            Commercially licensed helicopter and UAV pilots with thousands of combined flight hours.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="54" height="73" viewBox="0 0 54 73" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_53_91)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M52.0692 67.1789L45.2826 65.9315L41.9479 71.9901C39.4907 75.0788 37.9695 70.03 37.2675 68.248L30.7734 55.8339C32.2946 55.2993 34.1082 53.755 35.9219 52.0918C39.6077 52.1512 43.118 51.4978 45.6337 48.231L53.1223 62.9616L53.7659 64.3278C54.3509 66.1097 54.0584 67.2977 52.0692 67.1789Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.98895 67.1792L8.77552 65.9318L12.1103 71.9904C14.509 75.0791 16.0886 70.0303 16.7907 68.2484L23.2262 55.7748C21.7051 55.2402 19.8914 53.6959 18.0193 52.0327C14.275 52.0921 10.8232 51.4388 8.30748 48.1719L0.87736 62.8432L0.233806 64.2687C-0.292738 66.11 -0.000213422 67.298 1.98895 67.1792Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M23.1681 21.5615L25.9178 24.2344L31.4758 18.5322C32.0023 17.9383 32.3534 17.5225 33.0554 18.2353L35.2786 20.4924C35.9807 21.2051 35.9807 21.6209 35.2786 22.3337L27.1464 30.293C25.6838 31.7186 25.9763 31.8374 24.5137 30.3524L19.4238 25.2442C19.1898 25.0066 19.1313 24.5908 19.3653 24.3532C19.4238 24.2938 19.4238 24.2938 19.4823 24.2344L22.0565 21.5615C22.4075 21.1457 22.7001 21.1457 23.1681 21.5615Z"
                  fill="#DCC62D" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M48.0908 18.6509C46.7452 17.0472 45.9846 15.0277 45.9261 12.9487C45.8091 11.345 45.7506 9.68185 44.3465 7.60293C41.9478 4.03906 37.3259 5.99919 34.8102 4.57364C33.0551 3.56387 31.5924 1.90073 30.3053 1.06916C29.3693 0.356387 28.1992 0 27.0291 0C25.859 0 24.6889 0.356387 23.7528 1.06916C22.4657 1.90073 21.0031 3.50447 19.2479 4.57364C16.7322 5.99919 12.1103 4.03906 9.71162 7.60293C8.3075 9.68185 8.24899 11.345 8.13198 12.9487C8.07348 15.0277 7.31292 17.0472 5.9673 18.6509C3.04206 22.5712 2.45701 25.1847 3.91963 27.917C4.97272 29.7583 7.0789 30.7681 7.60544 31.9561C8.65853 34.4508 7.48843 36.3515 8.95105 39.262C9.88713 41.2221 11.5838 42.6477 13.5729 43.3011C15.3281 43.895 17.0832 43.0635 18.4873 43.6574C20.9446 44.7266 22.7582 47.1619 24.7474 47.7559C26.21 48.2311 27.7896 48.2311 29.2522 47.7559C31.2414 47.1619 33.0551 44.6672 35.5123 43.6574C36.9164 43.0635 38.6715 43.895 40.4267 43.3011C42.4743 42.6477 44.1125 41.2221 45.0486 39.262C46.5112 36.3515 45.3411 34.4508 46.3942 31.9561C46.8622 30.7681 49.0269 29.7583 50.08 27.917C51.6011 25.1847 51.0161 22.5712 48.0908 18.6509ZM26.912 38.7274C19.1309 38.7274 12.8124 32.3124 12.8124 24.3531C12.8124 16.4532 19.1309 9.97884 26.9706 9.97884C34.7517 9.97884 41.0702 16.3938 41.0702 24.3531C41.0702 32.3718 34.7517 38.7868 26.912 38.7274Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_53_91">
                  <rect width="54" height="73" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="feature-title">Certified & Insured</h3>
          <p class="feature-description">
            Fully CASA-approved operations with comprehensive public liability and hull insurance.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="60" height="60" viewBox="0 0 60 60" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_53_58)">
                <path
                  d="M33.2638 1.91943C24.2255 1.91943 16.2268 6.43143 11.3848 13.3164C12.3868 13.9704 13.3633 14.8667 14.3083 16.0194C17.9203 10.6187 23.7613 6.82893 30.5188 6.01443L33.2638 10.6592L36.0088 6.01443C46.3963 7.26543 54.6523 15.5214 55.9048 25.9089L51.2593 28.6539L55.9048 31.3989C55.0678 38.3439 51.0905 44.3229 45.4475 47.9057C45.8068 48.7247 46.0093 49.5624 46.0453 50.4264C46.0715 51.0579 46.0063 51.6542 45.8758 52.2204C54.275 47.7084 59.9998 38.8389 59.9998 28.6547C59.9998 13.9127 48.0065 1.91943 33.2638 1.91943Z"
                  fill="white" />
                <path
                  d="M40.0866 45.9504C33.9231 40.9974 32.1996 43.4319 29.4036 46.2279C27.4514 48.1809 22.5104 44.1024 18.2444 39.8364C13.9784 35.5696 9.90061 30.6301 11.8529 28.6771C14.6496 25.8811 17.0834 24.1569 12.1289 17.9949C7.17586 11.8314 3.87436 16.5631 1.16536 19.2721C-1.96214 22.3981 1.00036 34.0494 12.5151 45.5656C24.0314 57.0804 35.6819 60.0414 38.8079 56.9161C41.5169 54.2071 46.2501 50.9056 40.0866 45.9504Z"
                  fill="white" />
                <path
                  d="M21.3164 32.8386C21.3164 27.3599 27.7304 26.3841 27.7304 24.2466C27.7304 23.2094 26.9001 22.7736 26.1321 22.7736C24.7206 22.7736 23.9324 24.3501 23.9324 24.3501L21.2339 22.5449C21.2339 22.5449 22.6041 19.3491 26.4636 19.3491C28.8914 19.3491 31.5276 20.7396 31.5276 23.8941C31.5276 28.5224 25.5501 29.4149 25.4466 31.3244H31.7564V34.4369H21.4829C21.3786 33.8556 21.3164 33.3374 21.3164 32.8386Z"
                  fill="#DCC62D" />
                <path
                  d="M43.4439 27.8372V19.5977H39.0024L33.2739 28.6472V30.8462H39.8529V34.4372H43.4439V30.8462H45.2079V27.8372H43.4439ZM39.8529 24.5169V27.8379H36.9684V27.7967L39.2094 24.3924C39.6249 23.7699 39.9362 22.8564 39.9362 22.8564H39.9774C39.9774 22.8557 39.8529 23.7069 39.8529 24.5169Z"
                  fill="#DCC62D" />
              </g>
              <defs>
                <clipPath id="clip0_53_58">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="feature-title">24/7 Availability</h3>
          <p class="feature-description">
            On-call for urgent jobs, breaking news and time-critical inspections.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="82" height="82" viewBox="0 0 82 82" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.4002 25.42L10.6602 15.8537L14.4865 12.0273L24.0528 17.7673V21.5937L33.8928 31.4337C33.8928 31.7073 33.8928 31.98 33.8928 32.2537L30.3391 35.5337L20.2265 25.42H16.4002Z"
                fill="#DCC62D" />
              <path
                d="M57.3998 48.6538C56.5798 48.6538 56.0335 48.6538 55.2135 48.6538C53.2998 48.6538 51.6598 48.3801 50.0198 48.1064L44.2798 54.6664L57.1261 69.1528C60.1324 72.4328 65.3261 72.7064 68.3324 69.4264C71.6124 66.1464 71.3388 61.2264 68.0588 58.2201L57.3998 48.6538Z"
                fill="#DCC62D" />
              <path
                d="M66.6938 38.2663C71.0675 33.8926 72.4338 27.3326 70.7938 21.5926C70.5202 20.4989 69.1538 20.2263 68.6075 21.0463L59.0402 30.6136L51.3865 22.9599L60.9528 13.3936C61.7728 12.5736 61.4991 11.4799 60.4065 11.2073C54.6665 9.29361 48.1065 10.661 43.7328 15.3073C38.8128 20.2273 37.7191 27.881 40.4528 33.8936L13.1202 58.2199C9.84016 61.2263 9.56648 66.4199 12.8465 69.4263C16.1265 72.7063 21.0465 72.4326 24.0528 69.1526L48.3802 41.8199C54.3938 44.5536 61.7738 43.4599 66.6938 38.2663Z"
                fill="white" />
            </svg>
          </div>
          <h3 class="feature-title">Advanced Equipment</h3>
          <p class="feature-description">
            Modern helicopters, multi-rotor and fixed-wing drones fitted with the latest sensors.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="62" height="62" viewBox="0 0 62 62" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_53_81)">
                <path
                  d="M9.85323 12.2479C13.2299 12.2479 15.9672 9.50608 15.9672 6.12393C15.9672 2.74178 13.2299 0 9.85323 0C6.47658 0 3.73926 2.74178 3.73926 6.12393C3.73926 9.50608 6.47658 12.2479 9.85323 12.2479Z"
                  fill="white" />
                <path
                  d="M3.03189 33.7078H3.63794V45.8547C3.64039 46.6594 3.9606 47.4303 4.52864 47.9993C5.09669 48.5683 5.86641 48.889 6.66974 48.8915H13.0371C13.8405 48.889 14.6102 48.5683 15.1782 47.9993C15.7463 47.4303 16.0665 46.6594 16.0689 45.8547V45.1468C15.5125 44.0833 15.1591 42.8692 15.1591 41.6039V25.7115C15.1615 24.2379 15.5931 22.7969 16.4008 21.5653C17.2086 20.3336 18.3575 19.3646 19.7068 18.7772V17.5631C19.7045 16.7584 19.3844 15.9873 18.8163 15.4183C18.2482 14.8493 17.4784 14.5286 16.675 14.5264H3.03499C2.23106 14.5278 1.46042 14.8481 0.891668 15.4172C0.322913 15.9863 0.00234355 16.7579 9.06188e-05 17.5631V30.6718C-0.00300631 31.0714 0.0733047 31.4677 0.22458 31.8375C0.375855 32.2073 0.599071 32.5432 0.881229 32.8258C1.16339 33.1083 1.49885 33.3318 1.86808 33.4832C2.23731 33.6347 2.63292 33.711 3.03189 33.7078Z"
                  fill="white" />
                <path
                  d="M52.198 12.2479C55.5746 12.2479 58.3119 9.50608 58.3119 6.12393C58.3119 2.74178 55.5746 0 52.198 0C48.8213 0 46.084 2.74178 46.084 6.12393C46.084 9.50608 48.8213 12.2479 52.198 12.2479Z"
                  fill="white" />
                <path
                  d="M42.2935 17.5118V18.7267C43.6428 19.3141 44.7918 20.283 45.5996 21.5147C46.4073 22.7464 46.8388 24.1874 46.8412 25.661V41.5022C46.852 42.7424 46.5386 43.9638 45.9321 45.045V45.7538C45.9343 46.5585 46.2545 47.3296 46.8226 47.8986C47.3906 48.4676 48.1605 48.7883 48.9639 48.7905H55.3305C56.1339 48.7883 56.9037 48.4676 57.4718 47.8986C58.0399 47.3296 58.3601 46.5585 58.3623 45.7538V33.6068H58.9684C59.7718 33.6046 60.5416 33.2839 61.1097 32.7149C61.6778 32.1459 61.9979 31.3748 62.0002 30.5701V17.5118C61.9977 16.7072 61.6775 15.9362 61.1095 15.3673C60.5414 14.7983 59.7717 14.4776 58.9684 14.4751H45.3284C44.5245 14.4767 43.754 14.7971 43.1853 15.3662C42.6165 15.9352 42.2959 16.7067 42.2935 17.5118Z"
                  fill="white" />
                <path
                  d="M19.7569 25.7104V41.6028C19.7594 42.4074 20.0796 43.1784 20.6476 43.7474C21.2157 44.3163 21.9854 44.6371 22.7887 44.6395H23.9512V58.9631C23.9537 59.7677 24.2739 60.5387 24.8419 61.1077C25.41 61.6766 26.1797 61.9974 26.983 61.9998H35.1205C35.9239 61.9974 36.6936 61.6766 37.2616 61.1077C37.8297 60.5387 38.1499 59.7677 38.1523 58.9631V44.5891H39.3148C40.1182 44.5866 40.8879 44.2659 41.4559 43.6969C42.024 43.1279 42.3442 42.357 42.3466 41.5523V25.7111C42.3442 24.9065 42.024 24.1355 41.4559 23.5666C40.8879 22.9976 40.1182 22.6769 39.3148 22.6744H22.7887C22.3898 22.6712 21.9941 22.7475 21.6249 22.899C21.2557 23.0504 20.9202 23.2739 20.6381 23.5564C20.3559 23.839 20.1327 24.1749 19.9814 24.5447C19.8301 24.9145 19.7538 25.3108 19.7569 25.7104Z"
                  fill="#DCC62D" />
                <path
                  d="M31.0258 20.1438C34.9049 20.1438 38.0496 16.994 38.0496 13.1085C38.0496 9.22303 34.9049 6.07324 31.0258 6.07324C27.1466 6.07324 24.002 9.22303 24.002 13.1085C24.002 16.994 27.1466 20.1438 31.0258 20.1438Z"
                  fill="#DCC62D" />
              </g>
              <defs>
                <clipPath id="clip0_53_81">
                  <rect width="62" height="62" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 class="feature-title">Project-Ready Team</h3>
          <p class="feature-description">
            We work seamlessly with directors, surveyors and engineers on-site.
          </p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <svg class="feature-icon" width="102" height="102" viewBox="0 0 102 102" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M70.4821 29.478L57.0181 16.014C56.7121 15.708 56.4061 15.606 55.9981 15.606C55.1821 15.606 54.5701 16.218 54.5701 17.034V27.846C54.5701 30.09 56.4061 31.926 58.6501 31.926H69.4621C70.2781 31.926 70.8901 31.314 70.8901 30.498C70.8901 30.09 70.7881 29.784 70.4821 29.478ZM70.8901 40.086C70.8901 38.964 69.9721 38.046 68.8501 38.046H54.5701C51.2041 38.046 48.4501 35.292 48.4501 31.926V17.646C48.4501 16.524 47.5321 15.606 46.4101 15.606H26.0101C22.6441 15.606 19.8901 18.36 19.8901 21.726V70.686C19.8901 74.052 22.6441 76.806 26.0101 76.806C26.0101 76.806 45.0841 76.806 46.7161 76.806C48.3481 76.806 48.7561 75.684 48.6541 73.95C48.5521 72.216 47.9401 64.77 53.0401 58.854C58.1401 52.938 66.5041 52.53 67.7281 52.53C68.9521 52.53 70.9921 52.428 70.8901 50.694C70.7881 48.96 70.8901 40.086 70.8901 40.086ZM27.0301 28.458L32.0281 27.744C32.1301 27.744 32.3341 27.642 32.3341 27.54L34.5781 22.95C34.7821 22.644 35.1901 22.644 35.3941 22.95L37.6381 27.54C37.7401 27.642 37.8421 27.744 37.9441 27.744L42.9421 28.458C43.2481 28.56 43.4521 28.968 43.1461 29.172L39.4741 32.742C39.3721 32.844 39.3721 32.946 39.3721 33.15L40.1881 38.148C40.2901 38.454 39.8821 38.76 39.5761 38.556L35.0881 36.21C34.9861 36.108 34.7821 36.108 34.6801 36.21L30.1921 38.556C29.8861 38.76 29.4781 38.454 29.5801 38.148L30.3961 33.15C30.3961 33.048 30.3961 32.844 30.2941 32.742L26.6221 29.172C26.5201 28.968 26.7241 28.56 27.0301 28.458ZM45.3901 62.526C45.3901 63.648 44.4721 64.566 43.3501 64.566H30.0901C28.9681 64.566 28.0501 63.648 28.0501 62.526V60.486C28.0501 59.364 28.9681 58.446 30.0901 58.446H43.3501C44.4721 58.446 45.3901 59.364 45.3901 60.486V62.526ZM56.6101 50.286C56.6101 51.408 55.6921 52.326 54.5701 52.326H30.0901C28.9681 52.326 28.0501 51.408 28.0501 50.286V48.246C28.0501 47.124 28.9681 46.206 30.0901 46.206H54.5701C55.6921 46.206 56.6101 47.124 56.6101 48.246V50.286Z"
                fill="white" />
              <path
                d="M67.626 57.3242C59.568 57.3242 53.04 63.8522 53.04 71.9102C53.04 79.9682 59.568 86.4962 67.626 86.4962C75.684 86.4962 82.212 79.9682 82.212 71.9102C82.212 63.8522 75.582 57.3242 67.626 57.3242ZM70.176 73.2362C69.768 73.2362 69.36 73.1342 68.952 73.0322L63.342 78.5402C62.934 78.9482 62.526 79.0502 62.118 79.0502C61.608 79.0502 61.302 78.9482 60.894 78.5402C60.282 77.9282 60.282 76.8062 60.894 76.0922L66.504 70.4822C66.402 70.1762 66.3 69.7682 66.3 69.3602C66.096 66.8102 68.136 64.4642 70.686 64.4642C71.094 64.4642 71.502 64.5662 71.91 64.6682C72.114 64.6682 72.114 64.8722 72.012 65.0762L69.564 67.6262C69.36 67.7282 69.36 68.1362 69.564 68.2382L71.298 69.9722C71.502 70.1762 71.808 70.1762 72.012 69.9722L74.46 67.5242C74.562 67.4222 74.868 67.4222 74.868 67.6262C74.97 68.0342 75.072 68.4422 75.072 68.8502C74.97 71.4002 72.828 73.4402 70.176 73.2362Z"
                fill="#DCC62D" />
            </svg>
          </div>
          <h3 class="feature-title">Nationwide Coverage</h3>
          <p class="feature-description">
            Based in [City], operating across [State/Region] and remote locations by arrangement
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FluidAnimation from './FluidAnimation.vue'

const containerRef = ref(null)
const isContainerLoaded = ref(false)

const observeContainer = () => {
  if (!containerRef.value) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isContainerLoaded.value = true
        }, 100)
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  observer.observe(containerRef.value)
}

onMounted(() => {
  observeContainer()
})

onUnmounted(() => {
  if (containerRef.value) {
    const observer = new IntersectionObserver(() => { })
    observer.disconnect()
  }
})
</script>

<style scoped>
.why-fly-section {
  position: relative;
  width: 100%;
  background: #181818;
  padding: 120px 10% 140px;
  overflow: hidden;
  z-index: 1;
}

.decorative-bg-left {
  position: absolute;
  top: -70px;
  left: -180px;
  width: 460px;
  height: 493px;
  background: url('https://api.builder.io/api/v1/image/assets/TEMP/1caec34eca43baf95948561a702746271c1a79e2?width=921') no-repeat center;
  background-size: contain;
  transform: rotate(30deg);
  pointer-events: none;
  z-index: 0;
}

.decorative-bg-right {
  position: absolute;
  bottom: 90px;
  right: -100px;
  width: 1400px;
  height: 1154px;
  background: url('https://api.builder.io/api/v1/image/assets/TEMP/c0c5ad2bd94089aa977ba6999be092aa2057dabe?width=2158') no-repeat center;
  background-size: contain;
  transform: rotate(-10.41deg);
  filter: blur(1.75px);
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

.bottom-right-triangle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: rgb(31, 31, 31);
  z-index: 1;
  pointer-events: none;
  clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 200px));
}

.bottom-right-geo {
  position: absolute;
  bottom: -85px;
  right: -58px;
  width: 340px;
  height: 340px;
  z-index: 3;
  pointer-events: none;
  transform: rotate(81deg) scaleX(-1);
}

.bottom-right-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.left-bottom-geo {
  position: absolute;
  bottom: -10px;
  left: -55px;
  width: 300px;
  height: 300px;
  z-index: 1;
  pointer-events: none;
  transform: rotate(75deg);
}

.left-bottom-geo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 2;
}

.section-header {
  max-width: 690px;
  margin: 0 0 80px 0;
}

.section-label {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.8;
  margin: 0 0 12px 0;
}

.section-title {
  color: #FFF;
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
  font-weight: 500;
  line-height: 1.42;
  text-transform: uppercase;
  text-shadow: 0 6px 4.4px rgba(0, 0, 0, 0.24);
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
}

.title-bold {
  font-weight: 500;
}

.title-light {
  font-weight: 250;
}

.section-subtitle {
  color: #DCC62D;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.625;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 60px;
  max-width: 1180px;
  margin: 0 auto;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  padding: 30px 25px;
  border: 2px solid transparent;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(15px);
  border-color: #DCC62D;
}

.container-loaded .feature-card {
  animation: featureCardLoadIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.container-loaded .feature-card:nth-child(1) {
  animation-delay: 0s;
}

.container-loaded .feature-card:nth-child(2) {
  animation-delay: 0.3s;
}

.container-loaded .feature-card:nth-child(3) {
  animation-delay: 0.6s;
}

.container-loaded .feature-card:nth-child(4) {
  animation-delay: 0.9s;
}

.container-loaded .feature-card:nth-child(5) {
  animation-delay: 1.2s;
}

.container-loaded .feature-card:nth-child(6) {
  animation-delay: 1.5s;
}

@keyframes featureCardLoadIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 102px;
  margin-bottom: 8px;
}

.feature-icon {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 102px;
}

.feature-title {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.428;
  margin: 0 0 16px 0;
}

.feature-description {
  color: #FFF;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.625;
  margin: 0;
  max-width: 288px;
}

@media (max-width: 1200px) {
  .why-fly-section {
    padding: 100px 5% 120px;
  }

  .bottom-right-triangle {
    height: 350px;
    clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 350px));
  }

  .bottom-right-geo {
    width: 180px;
    right: 250px;
    bottom: 70px;
  }

  .left-bottom-geo {
    width: 160px;
    left: -40px;
    bottom: 70px;
  }

  .features-grid {
    gap: 60px 40px;
  }
}

@media (max-width: 1024px) {
  .why-fly-section {
    padding: 80px 4% 100px;
  }

  .bottom-right-triangle {
    height: 300px;
    clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 300px));
  }

  .bottom-right-geo {
    width: 160px;
    right: 200px;
    bottom: 60px;
  }

  .left-bottom-geo {
    width: 150px;
    left: -35px;
    bottom: 60px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 42px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 40px;
  }

  .decorative-bg-left {
    width: 350px;
    height: 370px;
    left: -150px;
  }

  .decorative-bg-right {
    width: 800px;
    height: 854px;
    right: -250px;
  }
}

@media (max-width: 768px) {
  .why-fly-section {
    padding: 60px 4% 80px;
  }

  .bottom-right-triangle {
    height: 250px;
    clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 250px));
  }

  .bottom-right-geo {
    width: 140px;
    right: 150px;
    bottom: 50px;
  }

  .left-bottom-geo {
    width: 130px;
    left: -30px;
    bottom: 50px;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .section-label {
    font-size: 18px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-subtitle {
    font-size: 15px;
  }

  .features-grid {
    gap: 50px 30px;
  }

  .feature-title {
    font-size: 24px;
  }

  .feature-description {
    font-size: 15px;
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 400px;
  }

  .section-title {
    font-size: 32px;
  }

  .decorative-bg-left {
    width: 250px;
    height: 270px;
    left: -100px;
    top: -30px;
  }

  .decorative-bg-right {
    width: 600px;
    height: 654px;
    right: -200px;
    bottom: -150px;
  }
}

@media (max-width: 480px) {
  .why-fly-section {
    /* padding: 50px 3% 60px; */
    padding: 3rem 8% 2.5rem;
  }

  .bottom-right-triangle {
    height: 200px;
    clip-path: polygon(100% 100%, 0 100%, 100% calc(100% - 100px));
  }

  .bottom-right-geo {
    width: 90px;
    right: -10px;
    bottom: -135px;
    transform: rotate(4deg);
  }

  .left-bottom-geo {
    width: 110px;
    left: -20px;
    bottom: -100px;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    opacity: 0;
    transform: translateY(30px);
    position: relative;
    padding: 5px 5px;
    border: 2px solid transparent;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-label {
    font-size: 16px;
  }

  .section-title {
    font-size: 28px;
    line-height: 1.3;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .feature-title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .feature-description {
    font-size: 14px;
  }

  .icon-wrapper {
    height: 90px;
  }

  .feature-icon {
    max-height: 90px;
  }
}
</style>
