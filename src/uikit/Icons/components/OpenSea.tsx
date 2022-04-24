import { Icon, IconProps } from "../Icon";

const OpenSea = (props: IconProps) => (
  <Icon viewBox="0 0 96 96" {...props}>
    <path
      d="M96 48C96 74.5082 74.5082 96 48 96C21.4918 96 0 74.5082 0 48C0 21.4918 21.4918 0 48 0C74.5138 0 96 21.4918 96 48Z"
      fill="#2081E2"
    />
    <path
      d="M23.6812 49.6129L23.8883 49.2873L36.375 29.7535C36.5575 29.4675 36.9865 29.497 37.1245 29.8077C39.2106 34.4828 41.0106 40.2971 40.1674 43.9169C39.8074 45.4063 38.8211 47.4232 37.7114 49.2873C37.5684 49.5586 37.4106 49.8249 37.2429 50.0814C37.164 50.1997 37.0308 50.2688 36.8878 50.2688H24.0461C23.7009 50.2688 23.4987 49.894 23.6812 49.6129Z"
      fill="white"
    />
    <path
      d="M79.3386 53.2426V56.3346C79.3386 56.5121 79.2301 56.67 79.0723 56.739C78.1058 57.1532 74.7967 58.6721 73.4208 60.5856C69.9095 65.4728 67.2268 72.4608 61.23 72.4608H36.2122C27.3453 72.4608 20.16 65.2509 20.16 56.3543V56.0683C20.16 55.8316 20.3523 55.6393 20.589 55.6393H34.5355C34.8116 55.6393 35.0138 55.8957 34.9892 56.1669C34.8905 57.0743 35.0582 58.0015 35.4873 58.8447C36.3157 60.5265 38.0319 61.5769 39.8862 61.5769H46.7904V56.1867H39.9651C39.615 56.1867 39.4079 55.7823 39.6101 55.4963C39.684 55.3828 39.7679 55.2645 39.8566 55.1314C40.5027 54.2141 41.4249 52.7889 42.3421 51.1664C42.9685 50.0716 43.575 48.9028 44.0632 47.7291C44.1619 47.517 44.2407 47.3 44.3197 47.0879C44.4528 46.7131 44.591 46.363 44.6895 46.0129C44.7882 45.7169 44.867 45.4063 44.946 45.1153C45.1778 44.1191 45.2764 43.0638 45.2764 41.969C45.2764 41.54 45.2567 41.0912 45.2173 40.6622C45.1975 40.1937 45.1383 39.7251 45.0791 39.2566C45.0397 38.8424 44.9657 38.433 44.8868 38.004C44.7882 37.3777 44.6501 36.7564 44.4923 36.13L44.438 35.8934C44.3197 35.4642 44.2211 35.055 44.083 34.626C43.6933 33.2796 43.2446 31.9678 42.7712 30.7399C42.5986 30.2516 42.4013 29.7831 42.204 29.3147C41.9131 28.6095 41.6172 27.9684 41.346 27.3617C41.2079 27.0855 41.0895 26.834 40.9712 26.5776C40.838 26.2866 40.7 25.9957 40.5618 25.7196C40.4632 25.5075 40.3498 25.3102 40.2709 25.1129L39.4276 23.5546C39.3092 23.3425 39.5065 23.091 39.7382 23.1551L45.0151 24.5852H45.0299C45.0397 24.5852 45.0446 24.5902 45.0495 24.5902L45.7449 24.7825L46.5093 24.9996L46.7904 25.0784V21.942C46.7904 20.4279 48.0036 19.2 49.5028 19.2C50.2524 19.2 50.9329 19.5058 51.4212 20.0038C51.9093 20.502 52.2151 21.1825 52.2151 21.942V26.5974L52.7773 26.7551C52.8217 26.77 52.8661 26.7897 52.9055 26.8192C53.0437 26.9228 53.2408 27.0757 53.4924 27.2631C53.6896 27.4209 53.9017 27.6133 54.1581 27.8105C54.6661 28.2198 55.2727 28.7475 55.9384 29.3541C56.1159 29.507 56.2886 29.6648 56.4464 29.8226C57.3045 30.6215 58.2661 31.5585 59.1834 32.5941C59.4398 32.8851 59.6914 33.181 59.9478 33.4916C60.2042 33.8073 60.4755 34.1179 60.7121 34.4287C61.0229 34.8429 61.3582 35.2719 61.6492 35.7207C61.7872 35.9328 61.9451 36.1498 62.0782 36.3618C62.453 36.9289 62.7834 37.5159 63.0991 38.1027C63.2322 38.3739 63.3703 38.6698 63.4886 38.9607C63.8388 39.7449 64.1149 40.5438 64.2924 41.3427C64.3467 41.5153 64.3862 41.7027 64.4059 41.8704V41.9099C64.4651 42.1465 64.4848 42.398 64.5045 42.6544C64.5834 43.4731 64.544 44.2917 64.3665 45.1153C64.2925 45.4655 64.1939 45.7959 64.0755 46.1461C63.9571 46.4814 63.8388 46.8315 63.6859 47.1619C63.3901 47.8474 63.0398 48.5329 62.6256 49.174C62.4925 49.4107 62.3346 49.6623 62.1768 49.899C62.0042 50.1504 61.8267 50.3871 61.6689 50.619C61.4519 50.9149 61.2202 51.2255 60.9834 51.5017C60.7714 51.7927 60.5544 52.0837 60.3177 52.3401C59.9872 52.7296 59.6716 53.0995 59.3412 53.4546C59.144 53.6864 58.9319 53.9231 58.7149 54.1352C58.5029 54.3718 58.2858 54.5839 58.0886 54.7812C57.7582 55.1116 57.482 55.368 57.2502 55.5801L56.7078 56.0782C56.6289 56.1472 56.5253 56.1867 56.4168 56.1867H52.2151V61.5769H57.5017C58.6853 61.5769 59.8097 61.1577 60.7171 60.3883C61.0278 60.1171 62.384 58.9434 63.9867 57.173C64.0409 57.1138 64.1101 57.0694 64.189 57.0497L78.7912 52.8283C79.0625 52.7494 79.3386 52.9565 79.3386 53.2426Z"
      fill="white"
    />
  </Icon>
);

export default OpenSea;
