function GraphicCard({ className, width, height }: { className: string, width: string, height: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M63.997 37.7167C63.997 35.6159 62.7193 33.1733 61.1446 32.2642L12.0521 3.92073C10.4774 3.01168 9.19971 3.97799 9.19971 6.07884V30.1723C9.19971 32.2732 10.4774 34.7158 12.0521 35.6248L61.1446 63.9683C62.7193 64.8774 63.997 63.9093 63.997 61.8102V37.7167Z"
        fill="#B94CED"
      />
      <path
        d="M4.39844 6.97893L10.2751 3.72388L11.6852 6.36693L9.1996 9.72577L4.39844 6.97893ZM57.4581 67.3218L63.1236 64.0506L57.9842 60.7472L57.4581 67.3218Z"
        fill="#B94CED"
      />
      <path
        d="M58.4907 40.8948C58.4907 38.7958 57.2112 36.3532 55.6365 35.4441L6.54586 7.10063C4.97112 6.19158 3.69165 7.15789 3.69165 9.25695V33.3522C3.69165 35.4513 4.97112 37.8939 6.54586 38.8029L55.6365 67.1464C57.2112 68.0555 58.4907 67.0892 58.4907 64.9901V40.8948Z"
        fill="#18171C"
      />
      <path
        d="M31.0348 37.0726C31.0348 37.0726 22.8962 21.4827 19.2206 16.0713C18.8681 15.5523 17.8123 13.77 17.3417 13.3155C16.8102 12.8037 15.4377 12.2168 15.0136 11.9716L6.43128 7.01655C4.85654 6.1075 3.57886 7.07382 3.57886 9.17466V33.2681C3.57886 35.369 4.85654 37.8116 6.43128 38.7207L15.86 44.1624C16.3414 44.4416 18.75 44.549 19.473 44.3235C21.7599 43.6113 31.0348 38.5149 31.0348 38.5149V37.0726ZM28.9769 35.9416C28.9769 35.9416 22.0588 22.6888 18.9343 18.088C18.6337 17.646 17.7372 16.1321 17.3363 15.7438C16.8854 15.309 15.7169 14.8097 15.3572 14.6021L8.06149 10.3897C6.72296 9.61666 5.63675 10.438 5.63675 12.2239V32.708C5.63675 34.4921 6.72296 36.5697 8.06149 37.3428L16.0765 41.9703C16.4863 42.2066 18.5335 42.2978 19.1473 42.1063C21.0924 41.5015 28.9769 37.1692 28.9769 37.1692V35.9416Z"
        fill="#B94CED"
      />
      <path
        d="M31.0349 37.0904C31.0349 37.0904 39.1734 52.6803 42.849 58.0917C43.2015 58.6106 44.2573 60.3929 44.728 60.8492C45.2594 61.361 46.632 61.948 47.0561 62.1931L55.6366 67.1464C57.2113 68.0555 58.4908 67.0891 58.4908 64.9901V40.8948C58.4908 38.7958 57.2113 36.3531 55.6366 35.4441L46.2096 30.0005C45.7283 29.7213 43.3196 29.614 42.5967 29.8395C40.3098 30.5517 31.0349 35.6481 31.0349 35.6481V37.0904ZM33.0928 38.2213C33.0928 38.2213 40.0109 51.4742 43.1353 56.0749C43.436 56.5169 44.3325 58.0326 44.7333 58.4191C45.1843 58.854 46.3528 59.3532 46.7125 59.5626L54.0082 63.7732C55.3467 64.5463 56.4329 63.7249 56.4329 61.939V41.4567C56.4329 39.6708 55.3467 37.595 54.0082 36.822L45.9931 32.1944C45.5833 31.9564 43.5362 31.8651 42.9224 32.0566C40.9772 32.6632 33.0928 36.9956 33.0928 36.9956V38.2213Z"
        fill="#B94CED"
      />
      <path
        d="M28.9771 35.9416C28.9771 35.9416 22.059 22.6887 18.9345 18.088C18.6339 17.646 17.7374 16.1321 17.3365 15.7438C16.8856 15.3089 15.7171 14.8097 15.3574 14.6021L8.0617 10.3897C6.72317 9.61662 5.63696 10.438 5.63696 12.2239V32.708C5.63696 34.4921 6.72317 36.5697 8.0617 37.3427L16.0768 41.9703C16.4865 42.2065 18.5337 42.2978 19.1475 42.1063C21.0926 41.5015 28.9771 37.1692 28.9771 37.1692V35.9416ZM33.0929 38.2214C33.0929 38.2214 40.011 51.4742 43.1354 56.0749C43.436 56.5169 44.3325 58.0326 44.7334 58.4192C45.1843 58.854 46.3529 59.3533 46.7125 59.5626L54.0082 63.7733C55.3468 64.5463 56.433 63.7249 56.433 61.939V41.4567C56.433 39.6708 55.3468 37.595 54.0082 36.822L45.9932 32.1944C45.5834 31.9564 43.5362 31.8652 42.9224 32.0566C40.9773 32.6633 33.0929 36.9956 33.0929 36.9956V38.2214Z"
        fill="black"
      />
      <path
        d="M31.6576 35.3081L29.3921 36.6162L30.6179 38.7421L32.5219 37.6434L31.6576 35.3081Z"
        fill="#B94CED"
      />
      <path
        d="M10.8997 27.2895L10.2072 26.8904C10.132 26.7437 10.0962 26.4305 10.0962 25.9474V25.942L10.0998 25.7273L10.107 25.2674C10.107 25.1439 10.0354 25.0401 9.89044 24.9578V26.7025L9.19971 26.3035V22.6655L10.0533 23.1576C10.2506 23.2723 10.4233 23.425 10.5615 23.6067C10.7017 23.7806 10.7781 23.9972 10.778 24.2205V24.6572C10.778 24.9399 10.6367 25.049 10.3503 24.9828C10.6367 25.228 10.7816 25.5107 10.7816 25.8328L10.7709 26.2247C10.7709 26.8081 10.8138 27.1624 10.8997 27.2895ZM10.1034 24.446V23.8447C10.1034 23.7177 10.0336 23.6139 9.89044 23.5316V24.5158C10.0336 24.5981 10.1034 24.5748 10.1034 24.446ZM12.4369 25.0097L12.0503 24.786V27.9498L11.3596 27.5507V24.3869L10.9713 24.1633V23.689L12.4369 24.5355V25.0097ZM14.527 29.3796L13.7843 28.9501L13.4676 27.5973L13.1723 28.5958L12.5102 28.2146L13.0542 26.4609L12.6516 24.6572L13.3173 25.0419L13.5624 26.239L13.838 25.3425L14.459 25.7022L13.9865 27.1141L14.527 29.3796ZM15.402 28.3596L16.0373 28.7264V29.5889C16.0373 29.6784 16.0784 29.7464 16.1625 29.7947C16.2449 29.843 16.2878 29.8234 16.2878 29.7339V28.891C16.2915 28.8089 16.2696 28.7276 16.2252 28.6584C16.1603 28.5808 16.0806 28.5169 15.9908 28.4705V28.0607C16.1876 28.1735 16.2878 28.1609 16.2878 28.0178V27.3736C16.2878 27.3002 16.2449 27.2412 16.1625 27.1928C16.0749 27.1427 16.0319 27.1535 16.0319 27.2268V27.8961L15.4199 27.5418V26.8672C15.4199 26.4377 15.6758 26.3715 16.1912 26.6685C16.397 26.7884 16.5777 26.9441 16.7316 27.1356C16.8792 27.3097 16.9609 27.5301 16.9624 27.7583V28.2576C16.9624 28.5493 16.8425 28.6745 16.6028 28.6369C16.7252 28.7492 16.8217 28.8867 16.8857 29.04C16.9496 29.1932 16.9795 29.3586 16.9732 29.5245V30.0649C16.9732 30.5714 16.7119 30.6734 16.193 30.3745C15.6651 30.0685 15.402 29.6874 15.402 29.2275V28.3596ZM17.0949 30.2403V27.8979C17.0949 27.4273 17.3669 27.3485 17.9109 27.6617C18.4441 27.9695 18.7108 28.3578 18.7108 28.8266V31.1673C18.7108 31.3766 18.6356 31.4965 18.4853 31.5252C18.335 31.5538 18.1417 31.5001 17.9055 31.3623C17.6773 31.2346 17.4776 31.0617 17.3185 30.8541C17.1786 30.6796 17.1 30.4639 17.0949 30.2403ZM18.0182 30.8112V28.3327C18.0182 28.2594 17.9807 28.2021 17.9055 28.1592C17.8268 28.1126 17.7874 28.1269 17.7874 28.1985V30.6787C17.7874 30.7503 17.8268 30.8094 17.9055 30.8559C17.9807 30.8988 18.0182 30.8845 18.0182 30.8112ZM18.8432 30.3513L19.516 30.7396V31.6665C19.516 31.7453 19.5554 31.8079 19.6323 31.8526C19.7075 31.8956 19.7451 31.8777 19.7451 31.7989V30.7181C19.695 30.7503 19.6037 30.727 19.4677 30.6483C19.2886 30.5457 19.1345 30.4045 19.0168 30.2349C18.9059 30.0811 18.8452 29.8967 18.8432 29.707V28.8588C18.8432 28.6477 18.9148 28.526 19.0597 28.4956C19.2047 28.4652 19.3943 28.517 19.627 28.653C19.865 28.789 20.0564 28.9573 20.2014 29.1541C20.3386 29.3284 20.4152 29.5426 20.4197 29.7643V32.1085C20.4197 32.5792 20.1549 32.6615 19.6234 32.3537C19.1027 32.053 18.8432 31.6701 18.8432 31.203V30.3513ZM19.7451 30.2081V29.3348C19.7454 29.2966 19.735 29.2591 19.7151 29.2265C19.6952 29.1939 19.6665 29.1676 19.6323 29.1505C19.5554 29.1058 19.516 29.1237 19.516 29.2024V30.0757C19.516 30.1544 19.5554 30.217 19.6323 30.2618C19.7075 30.3047 19.7451 30.2868 19.7451 30.2081ZM20.5468 32.2338V29.8914C20.5468 29.4189 20.8188 29.3402 21.3628 29.6551C21.896 29.9629 22.1627 30.3513 22.1627 30.8183V33.1607C22.1627 33.3701 22.0875 33.49 21.9372 33.5168C21.7869 33.5455 21.5936 33.4918 21.3574 33.3558C21.1284 33.2285 20.9285 33.0548 20.7704 32.8458C20.6305 32.672 20.5519 32.4569 20.5468 32.2338ZM21.4701 32.8046V30.3262C21.4701 30.2528 21.4325 30.1956 21.3574 30.1508C21.2787 30.1061 21.2393 30.1204 21.2393 30.192V32.6704C21.2393 32.7438 21.2787 32.8028 21.3574 32.8494C21.4325 32.8923 21.4701 32.8762 21.4701 32.8046Z"
        fill="#A8A8A8"
      />
      <path
        d="M46.7983 35.5604C51.4097 38.2231 55.1533 44.71 55.1533 50.0355C55.1533 55.3609 51.4097 57.5226 46.7983 54.8599C42.185 52.1971 38.4414 45.7103 38.4414 40.3848C38.4414 35.0611 42.185 32.8977 46.7983 35.5604Z"
        fill="#B94CED"
      />
      <path
        d="M46.0824 35.9738C50.6939 38.6365 54.4393 45.1216 54.4393 50.4471C54.4393 55.7725 50.6939 57.9342 46.0824 55.2715C41.471 52.6088 37.7256 46.1237 37.7256 40.7982C37.7256 35.4728 41.471 33.3111 46.0824 35.9738Z"
        fill="#B94CED"
      />
      <path
        d="M46.0825 42.8794C47.3942 43.6363 48.4589 45.4813 48.4589 46.9952C48.4589 48.5091 47.3942 49.1229 46.0825 48.3659C44.7708 47.609 43.7061 45.7658 43.7061 44.2519C43.7061 42.7362 44.7708 42.1224 46.0825 42.8794Z"
        fill="#B94CED"
      />
      <path
        d="M46.0826 43.5271C47.0847 44.1051 47.8971 45.5135 47.8971 46.6712C47.8971 47.8272 47.0847 48.2961 46.0826 47.7181C45.0805 47.1401 44.2681 45.7318 44.2681 44.5758C44.2681 43.418 45.0805 42.9491 46.0826 43.5271Z"
        fill="#B94CED"
      />
      <path
        d="M44.9409 35.5873C42.7416 34.3168 40.9575 34.85 40.9575 36.7737C40.9575 38.6992 42.7416 41.2939 44.9409 42.5627C44.2806 41.3691 43.7455 39.7764 43.7455 38.3842C43.7455 36.9938 44.2806 36.0203 44.9409 35.5873ZM50.5473 40.0538C48.7507 37.5539 46.5174 36.346 45.5672 37.3571C44.6152 38.3681 45.3024 41.217 47.1008 43.7169C46.963 42.5394 47.1598 41.2581 47.847 40.5262C48.5342 39.7961 49.606 39.7317 50.5473 40.0538Z"
        fill="#B94CED"
      />
      <path
        d="M54.1619 47.9508C53.8291 45.2486 52.2204 42.5197 50.5723 41.8594C48.9242 41.2009 47.8576 42.8597 48.1905 45.5618C48.7864 45.0303 49.8046 44.8102 50.9946 45.288C52.1864 45.764 53.3656 46.861 54.1619 47.9508Z"
        fill="#B94CED"
      />
      <path
        d="M52.3958 54.8796C54.1531 54.3696 54.6971 52.0898 53.6108 49.7939C52.5246 47.498 50.2162 46.0485 48.459 46.5603C49.445 47.3781 50.5974 48.7828 51.383 50.4417C52.1667 52.1023 52.4638 53.7558 52.3958 54.8796ZM45.9465 54.7794C48.0474 56.7406 50.2001 56.9178 50.7513 55.1748C51.3042 53.4301 50.0462 50.422 47.9454 48.4589C48.3426 49.7849 48.4858 51.4259 48.0867 52.6857C47.6877 53.9455 46.8091 54.6308 45.9465 54.7794Z"
        fill="#B94CED"
      />
      <path
        d="M40.884 49.6024C42.1939 52.3976 44.3807 54.3517 45.7621 53.9651C47.1418 53.5786 47.1991 50.9946 45.8892 48.1995C45.6977 49.2016 45.0965 50.1393 44.0979 50.4202C43.0994 50.6994 41.8611 50.277 40.884 49.6024Z"
        fill="#B94CED"
      />
      <path
        d="M38.166 43.3106C38.3718 45.8982 39.8875 48.6307 41.5517 49.4073C43.2159 50.184 44.3988 48.713 44.1948 46.1237C43.5523 46.5728 42.4948 46.6856 41.2922 46.1237C40.0897 45.5636 38.9319 44.4147 38.166 43.3106Z"
        fill="#B94CED"
      />
      <path
        d="M38.2714 37.681C37.4608 39.5098 38.0549 42.3068 39.5956 43.9227C41.1363 45.5368 43.0475 45.3632 43.8581 43.5325C42.9634 43.3983 41.7376 42.7684 40.6246 41.6017C39.5745 40.4738 38.7728 39.1381 38.2714 37.681Z"
        fill="#B94CED"
      />
      <path
        d="M18.2777 5.09103L12.7876 1.92188V7.46566L18.2777 10.6366V5.09103Z"
        fill="#B94CED"
      />
      <path
        d="M18.2777 3.17095L12.7876 0V2.60726L18.2777 5.77642V3.17095Z"
        fill="#B94CED"
      />
      <path
        d="M13.5357 0.431275L13.2529 0.268433V2.8757L13.5357 3.03854V0.431275ZM14.2121 0.823169L13.9294 0.660327V3.2658L14.2121 3.43043V0.823169ZM14.8903 1.21506L14.6076 1.05043V3.6577L14.8903 3.82054V1.21506ZM15.5685 1.60517L15.284 1.44233V4.04959L15.5685 4.21243V1.60517ZM16.2449 1.99706L15.9622 1.83243V4.4397L16.2449 4.60433V1.99706ZM16.9231 2.38717L16.6404 2.22433V4.83159L16.9231 4.99443V2.38717ZM17.6014 2.77906L17.3168 2.61622V5.22349L17.6014 5.38633V2.77906ZM18.2778 3.17096L17.995 3.00633V5.61359L18.2778 5.77643V3.17096Z"
        fill="#E1CBA9"
      />
      <path
        d="M19.0777 7.55876L17.5674 6.6855V10.2269L19.0777 11.0983V7.55876ZM45.7337 20.7561L19.0777 5.36487V11.0983L45.7337 26.4878V20.7561Z"
        fill="#B94CED"
      />
      <path
        d="M45.7336 18.9344L19.0776 3.54315V6.14863L45.7336 21.5399V18.9344Z"
        fill="#B94CED"
      />
      <path
        d="M19.3604 3.70778L19.0776 3.54315V6.15041L19.3604 6.31505V3.70778ZM20.1853 4.18378L19.9026 4.01915V6.62641L20.1853 6.78926V4.18378ZM21.0085 4.65799L20.7257 4.49515V7.10241L21.0085 7.26526V4.65799ZM21.8334 5.13399L21.5507 4.97115V7.57842L21.8334 7.74126V5.13399ZM22.6584 5.60999L22.3738 5.44715V8.05442L22.6584 8.21726V5.60999ZM23.4815 6.08599L23.1988 5.92315V8.53041L23.4815 8.69326V6.08599ZM24.3065 6.56199L24.022 6.39915V9.00641L24.3065 9.16926V6.56199ZM25.1296 7.03799L24.8469 6.87515V9.48063L25.1296 9.64526V7.03799ZM25.9546 7.51399L25.6718 7.35115V9.95663L25.9546 10.1213V7.51399ZM26.7777 7.98999L26.495 7.82536V10.4326L26.7777 10.5973V7.98999ZM27.6027 8.46599L27.32 8.30136V10.9086L27.6027 11.0733V8.46599ZM28.4258 8.94199L28.1431 8.77736V11.3846L28.4258 11.5475V8.94199ZM29.2508 9.41799L28.9681 9.25336V11.8606L29.2508 12.0235V9.41799ZM30.0757 9.8922L29.7912 9.72936V12.3366L30.0757 12.4995V9.8922ZM30.8989 10.3682L30.6162 10.2054V12.8126L30.8989 12.9755V10.3682ZM31.7238 10.8442L31.4393 10.6814V13.2886L31.7238 13.4515V10.8442ZM32.547 11.3202L32.2643 11.1574V13.7646L32.547 13.9275V11.3202ZM33.372 11.7962L33.0892 11.6334V14.2406L33.372 14.4035V11.7962ZM34.1951 12.2722L33.9124 12.1094V14.7148L34.1951 14.8795V12.2722ZM35.0201 12.7482L34.7373 12.5854V15.1908L35.0201 15.3555V12.7482ZM35.845 13.2242L35.5605 13.0596V15.6668L35.845 15.8315V13.2242ZM36.6682 13.7002L36.3854 13.5356V16.1428L36.6682 16.3075V13.7002ZM37.4931 14.1762L37.2086 14.0116V16.6188L37.4931 16.7817V14.1762ZM38.3163 14.6522L38.0335 14.4876V17.0948L38.3163 17.2577V14.6522ZM39.1412 15.1264L38.8585 14.9636V17.5708L39.1412 17.7337V15.1264ZM39.9644 15.6024L39.6816 15.4396V18.0468L39.9644 18.2097V15.6024ZM40.7893 16.0784L40.5066 15.9156V18.5228L40.7893 18.6857V16.0784ZM41.6125 16.5544L41.3297 16.3916V18.9988L41.6125 19.1617V16.5544ZM42.4374 17.0304L42.1547 16.8676V19.4748L42.4374 19.6377V17.0304ZM43.2624 17.5064L42.9778 17.3436V19.949L43.2624 20.1137V17.5064ZM44.0855 17.9824L43.8028 17.8196V20.425L44.0855 20.5897V17.9824ZM44.9105 18.4584L44.626 18.2938V20.901L44.9105 21.0657V18.4584ZM45.7336 18.9344L45.4509 18.7698V21.377L45.7336 21.5417V18.9344Z"
        fill="#E1CBA9"
      />
      <path
        d="M45.7336 18.9344C45.7336 18.9344 46.2562 25.7899 46.3206 25.7899C46.3832 25.7899 45.7336 26.4878 45.7336 26.4878"
        fill="#B94CED"
      />
      <path
        d="M45.7336 60.4055L15.2249 42.7899V43.7956L45.7336 61.4112V60.4055Z"
        fill="#B94CED"
      />
      <path
        d="M50.5078 26.9512L46.9414 29.0109L47.6196 29.4028L51.186 27.3431L50.5078 26.9512ZM52.2812 27.9766L48.7166 30.0345L49.3948 30.4264L52.9612 28.3685L52.2812 27.9766ZM54.0564 29.002L50.4899 31.0599L51.1699 31.4518L54.7346 29.3921L54.0564 29.002ZM55.8315 30.0255L52.2651 32.0852L52.9433 32.4753L56.5097 30.4174L55.8315 30.0255ZM57.6049 31.0509L54.0402 33.1088L54.7185 33.5007L58.2849 31.4428L57.6049 31.0509ZM59.38 32.0745L55.8136 34.1342L56.4936 34.5243L60.0582 32.4664L59.38 32.0745ZM63.1308 39.5062L59.2637 41.7394V42.6557L63.1308 40.4242V39.5062ZM63.1379 41.7162L59.2709 43.9494V44.8657L63.1379 42.6324V41.7162ZM63.1469 43.9262L59.278 46.1594V47.0757L63.1469 44.8424V43.9262ZM63.154 46.1362L59.2852 48.3694V49.2857L63.154 47.0524V46.1362ZM63.1612 48.3462L59.2924 50.5794V51.4957L63.1612 49.2624V48.3462ZM63.1684 50.5562L59.2995 52.7894V53.7057L63.1684 51.4724V50.5562ZM63.1755 52.7662L59.3067 54.9994V55.9157L63.1755 53.6824V52.7662ZM63.1827 54.9762L59.3138 57.2094V58.1257L63.1827 55.8924V54.9762ZM63.1898 57.1862L59.321 59.4194V60.3357L63.1898 58.1024V57.1862ZM63.197 59.3962L59.3281 61.6277V62.5457L63.197 60.3124V59.3962Z"
        fill="#B94CED"
      />
    </svg>
  );
}

export default GraphicCard;