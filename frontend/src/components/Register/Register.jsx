import React, { useState } from "react";
import { createBrowserHistory } from "history";

import { registerUser } from "../../API";
import styles from "./Register.module.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const history = createBrowserHistory();

        registerUser(email, name, password).then(() => {
            history.push("/");
            window.location.reload();
        });
    };

    return (
        <div className={styles.registerContainer}>
            <div>
                <svg
                    width="100"
                    height="111"
                    viewBox="0 0 100 111"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M99.9957 91.1152L88.7097 74.7602C88.7097 74.7602 88.4978 70.7116 87.7585 69.7653C87.0192 68.8191 87.6034 66.7094 87.6034 66.7094C87.6034 66.7094 88.3944 65.5511 87.7068 65.4477C87.0192 65.3443 87.6034 62.7641 87.6034 62.7641L87.5465 58.6586C87.5465 58.6586 88.1824 54.7133 87.6551 53.7671C87.5013 53.5116 87.4244 53.2172 87.4336 52.9192C87.4428 52.6211 87.5376 52.3321 87.7068 52.0866C87.7068 52.0866 88.3375 49.8218 87.7068 49.2427C87.0761 48.6636 87.2312 45.1371 87.3914 42.3501C87.5517 39.5631 86.2851 37.986 86.2851 37.562C86.2851 37.138 82.1181 33.0376 82.1181 32.6705C82.1181 32.3033 79.4815 30.7728 77.8995 30.354C76.3175 29.9352 75.5265 29.6197 75.5782 29.4077C75.6299 29.1957 73.1019 28.3736 73.1019 28.3736C73.1019 28.3736 70.884 28.2185 70.0413 27.1119C69.1986 26.0054 66.6188 25.69 66.5464 25.6796C66.4741 25.6693 66.5103 25.5297 66.4948 25.4573L66.4482 25.2194C66.6447 24.8885 66.8308 24.5421 66.9962 24.1853L67.1462 23.8647C68.0702 23.8678 68.9728 23.5862 69.7311 23.0581C70.1025 22.746 70.4061 22.361 70.623 21.9271C70.84 21.4931 70.9657 21.0192 70.9926 20.5348C71.0382 19.5627 70.826 18.5958 70.3773 17.7322C69.9121 16.7808 69.2348 15.8035 69.4674 14.7746C69.5708 14.3299 69.8345 13.9421 69.9844 13.5077C70.1867 12.6595 70.0514 11.7658 69.607 11.0154C69.2038 10.2502 68.6506 9.57799 68.206 8.83858C67.6358 7.88678 67.2565 6.83301 67.0893 5.73614C67.0553 5.15763 66.9169 4.59005 66.6809 4.06083C66.4408 3.68791 66.1256 3.36916 65.7555 3.12492C64.1008 1.94145 62.1016 1.33794 60.0686 1.40824C58.6314 1.45477 57.1993 1.84258 55.7724 1.66677C54.9211 1.51982 54.0839 1.30011 53.2702 1.01008C51.5021 0.493009 49.46 0.270682 47.9193 1.28415C46.3787 2.29761 45.7687 4.28831 44.7244 5.8447C43.7989 7.22529 42.4496 8.37838 41.7465 9.83652C41.7465 9.81067 41.7465 9.77966 41.7465 9.75381C41.5751 10.0926 41.4433 10.45 41.3536 10.819C41.1598 11.983 41.2394 13.1761 41.5862 14.304C41.6674 14.9094 41.9716 15.4625 42.4392 15.8553C42.9562 16.1862 43.6749 16.1086 44.2849 16.2172C44.2849 16.3155 44.2332 16.4137 44.2125 16.5171C43.5819 19.4813 44.0924 22.5744 45.642 25.1787C47.1917 27.7829 49.6665 29.7068 52.5722 30.566C52.5722 30.6746 52.5722 30.7832 52.5722 30.8866C52.5722 31.1891 52.5532 31.4913 52.5154 31.7915V31.7915C52.5154 31.7915 47.2162 30.7004 45.7945 31.4398C44.3728 32.1792 41.5759 32.7532 41.1416 33.1772C40.7073 33.6012 39.663 33.2806 38.7118 35.7626C37.7605 38.2445 37.6778 40.7627 36.4474 41.9209C35.2169 43.0791 34.6017 43.8651 34.55 44.7079C34.4983 45.5508 34.7051 45.7421 34.2295 46.0213C33.7538 46.3005 33.0714 47.3915 33.2834 47.8104C33.3557 48.1018 33.3392 48.4082 33.2361 48.6902C33.1329 48.9721 32.9477 49.2168 32.7044 49.3926C32.4576 49.5652 32.2598 49.7989 32.1302 50.0707C32.0007 50.3426 31.9437 50.6434 31.965 50.9438C31.965 50.9438 31.6497 52.1021 30.9311 52.3658C30.2125 52.6295 29.7162 54.3617 29.7162 54.3617L27.3277 57.1125L22.5869 51.8694C22.2307 51.4775 21.7341 51.2424 21.2053 51.2153C20.6766 51.1882 20.1585 51.3713 19.7641 51.7246L17.4377 53.7929C16.541 54.0116 15.7306 54.4943 15.1112 55.1787C14.6043 55.6999 14.1946 56.3075 13.9015 56.9729L12.6297 58.1208C12.2281 58.6184 11.9828 59.2237 11.9249 59.8605C11.8669 60.4973 11.9988 61.137 12.304 61.6989L15.3387 65.0547V65.0858C14.2779 65.2056 13.277 65.6396 12.4642 66.3319C7.93025 70.3289 7.87339 74.0156 8.56098 75.6961C9.24858 77.3766 14.9923 83.8556 14.9923 83.8556C14.9923 83.8556 18.3321 88.1938 23.1504 90.5051L23.1142 90.5413C23.0211 90.6447 22.9229 90.7533 22.8299 90.8722L22.7523 90.9705C22.73 91.0061 22.7058 91.0406 22.6799 91.0739L22.5972 91.198L22.53 91.3014L22.4369 91.4565L22.3801 91.5547L22.2715 91.7616C22.2715 91.7616 22.2457 91.803 22.2353 91.8288C22.225 91.8547 22.1475 92.0149 22.1061 92.1132C22.0901 92.1485 22.0762 92.1848 22.0647 92.2218C22.0337 92.289 22.0078 92.3614 21.982 92.4286L21.9355 92.5682C21.9355 92.6354 21.8889 92.7027 21.8683 92.7699L21.8217 92.9198L21.7597 93.1525C21.7597 93.1991 21.7339 93.2456 21.7184 93.2921C21.7028 93.3387 21.6615 93.5403 21.6356 93.6696C21.63 93.72 21.6213 93.7701 21.6098 93.8195L21.5632 94.0936C21.5632 94.1556 21.5632 94.2177 21.5374 94.2849L21.5064 94.5434C21.5064 94.6107 21.5064 94.6779 21.5064 94.7451C21.5064 94.8123 21.5064 94.9416 21.5064 95.045V95.2312C21.5064 95.3966 21.5064 95.5621 21.5064 95.7482C21.3978 101.907 21.7597 102.801 21.7597 102.801C21.9932 103.371 22.3764 103.867 22.8688 104.236C23.3612 104.606 23.9444 104.835 24.5566 104.9C24.859 104.922 25.1629 104.907 25.4613 104.854C28.2014 104.378 34.6327 103.272 36.9023 103.696C38.2672 103.949 40.7901 103.572 42.5892 103.235L43.0648 103.142L43.3957 104.177L44.4297 103.892L45.3189 104.409C45.5515 104.549 45.7428 104.657 45.8772 104.73C46.9112 108.261 51.1402 107.057 51.1402 107.057L52.1431 107.636L62.3175 107.899C63.4649 108.591 64.6769 109.17 65.9364 109.626C66.1054 109.678 66.2783 109.716 66.4534 109.74C67.3976 109.814 68.3454 109.831 69.2916 109.792C70.0723 109.792 70.672 109.74 70.672 109.74C70.672 109.74 70.5686 106.974 70.4239 103.882C73.5775 103.805 76.7242 103.547 79.8486 103.111C85.2821 102.155 87.5517 97.2115 88.384 94.5693C88.63 95.6491 88.8027 96.7444 88.901 97.8475C89.1241 98.8117 89.4055 99.7614 89.7437 100.691C90.0418 101.439 90.4326 102.146 90.9069 102.796C94.9136 101.426 92.4889 99.3729 91.6462 98.4784C90.8035 97.5838 92.2253 96.8496 92.2253 96.8496C92.2253 96.8496 93.3316 96.1102 93.2282 95.4276C93.1248 94.7451 93.068 94.0057 96.6559 94.0626C100.244 94.1194 99.9957 91.1152 99.9957 91.1152ZM44.3107 57.5055C44.3573 57.8106 44.8588 61.0474 45.3086 61.9006C45.4383 62.47 45.4784 63.0562 45.4275 63.638C43.3026 63.4673 41.0899 63.3743 41.0899 63.3743C41.1538 63.4525 41.1933 63.5478 41.2037 63.6483L40.8728 63.5708L40.3868 63.4518L44.3004 57.5003L44.3107 57.5055ZM36.5559 69.848L40.2369 70.4271L40.5419 70.4788C40.4393 71.053 40.3754 71.6335 40.3506 72.2162C40.3506 72.2679 40.4385 72.3352 40.5523 72.4127C40.5027 72.6995 40.4802 72.9904 40.485 73.2814C40.5419 73.571 42.2635 74.2018 44.2332 74.724C44.2074 74.8326 44.1815 74.9309 44.1505 75.0239C42.4082 74.1087 39.6682 73.6795 39.3528 73.0022C39.0375 72.3248 29.7007 69.0724 29.7007 69.0724C29.7007 69.0724 29.3594 68.8914 28.7701 68.607L31.2309 69.0724L31.903 69.0052C33.4339 69.3899 34.9881 69.6749 36.5559 69.8584V69.848Z"
                        fill="url(#paint0_linear)"
                    />
                    <path
                        d="M87.9899 93.4007C87.9899 93.4007 86.5268 102.237 79.1028 103.54C71.6789 104.844 46.9099 104.575 46.9099 104.575C46.9099 104.575 32.7495 102.506 27.6262 90.562C22.5028 78.6176 19.2147 73.8398 23.604 73.6278C27.9932 73.4158 51.6662 81.6269 53.0259 81.7303C54.3856 81.8338 89.2979 63.5552 87.9899 93.4007Z"
                        fill="#65617D"
                    />
                    <path
                        opacity="0.05"
                        d="M87.9899 93.4007C87.9899 93.4007 86.5268 102.237 79.1028 103.54C71.6789 104.844 46.9099 104.575 46.9099 104.575C46.9099 104.575 32.7495 102.506 27.6262 90.562C22.5028 78.6176 19.2147 73.8398 23.604 73.6278C27.9932 73.4158 51.6662 81.6269 53.0259 81.7303C54.3856 81.8338 89.2979 63.5552 87.9899 93.4007Z"
                        fill="black"
                    />
                    <path
                        d="M21.5571 103.23C21.7906 103.792 22.1712 104.281 22.6588 104.645C23.1464 105.009 23.7231 105.235 24.3281 105.299C24.627 105.321 24.9275 105.305 25.2225 105.252C27.9419 104.781 34.3163 103.701 36.5652 104.104C37.9145 104.352 40.4168 103.98 42.1952 103.644C43.3791 103.422 44.2631 103.215 44.2631 103.215C44.2631 103.215 42.1693 96.2601 41.9109 96.0533C41.6524 95.8464 32.5017 90.3655 32.5017 90.3655L25.2639 89.8484C24.2906 89.9963 23.4113 90.5128 22.8082 91.291C22.0431 92.2166 21.3865 93.7368 21.3451 96.2239C21.2004 102.341 21.5571 103.23 21.5571 103.23Z"
                        fill="#3F3D56"
                    />
                    <path
                        opacity="0.05"
                        d="M21.5571 103.23C21.7906 103.792 22.1712 104.281 22.6588 104.645C23.1464 105.009 23.7231 105.234 24.3282 105.298C23.6168 104.382 22.9608 103.423 22.3636 102.429L22.3998 97.3613C22.2519 95.9715 22.4322 94.5663 22.926 93.2587C23.4199 91.9512 24.2135 90.7778 25.2432 89.8328C25.2432 89.8328 21.4278 90.0913 21.3244 96.2082C21.221 102.325 21.5571 103.23 21.5571 103.23Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M52.9756 92.1497L59.6965 86.8704L70.3051 76.4152C70.3051 76.4152 69.1626 76.3583 67.4307 76.2859C67.0016 76.5599 65.797 77.4234 65.7505 78.4679C65.6988 79.7451 62.8863 78.5558 61.4233 79.2901C59.9602 80.0243 52.7999 89.1869 51.5436 89.1145C50.2873 89.0421 49.2947 88.4785 48.7725 89.3678L48.7363 89.4247L52.9756 92.1497Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M22.7656 91.3068L23.4997 91.6429C28.6179 93.8353 34.9407 98.4372 35.3905 99.2748C35.68 99.7919 39.3454 102.005 42.1734 103.675C43.3573 103.453 44.2413 103.246 44.2413 103.246C44.2413 103.246 42.1475 96.2913 41.889 96.0845C41.6305 95.8777 32.4798 90.3967 32.4798 90.3967L25.242 89.8796C24.2635 90.0186 23.3765 90.5298 22.7656 91.3068V91.3068Z"
                        fill="black"
                    />
                    <path
                        d="M8.54839 76.3115C9.23082 77.9816 14.928 84.414 14.928 84.414C14.928 84.414 18.547 89.1142 23.6548 91.3118C28.7627 93.5093 35.1009 98.1061 35.5714 98.9438C35.8712 99.4608 39.9554 101.938 42.8092 103.628L43.4555 104.006L44.8824 104.833L45.6371 105.268L49.1268 102.449C50.8484 101.053 52.5596 99.647 52.5855 99.5694C52.6372 99.4143 53.3196 97.6355 53.1593 97.5321C53.0818 97.4753 52.7199 96.7565 52.0582 95.9137C51.3581 94.9798 50.4453 94.2264 49.3957 93.7161C47.8703 92.934 46.6548 91.6582 45.9473 90.0966C45.9473 90.0966 45.7198 89.9312 45.3735 89.714C44.6608 89.2255 43.8629 88.8747 43.0212 88.6799C41.8735 88.5351 39.7331 86.1824 39.7331 86.1824C38.8955 85.6371 38.1963 84.9042 37.691 84.0417C37.143 82.8938 29.0366 77.3198 28.287 76.8027L47.9326 89.4244L52.632 92.4442L59.3529 87.1648L69.9666 76.7148C69.9666 76.7148 68.5397 76.6424 66.4614 76.5545C61.2916 76.3322 52.1512 75.9806 50.9932 76.2443C50.0515 76.4622 49.0806 76.5251 48.1187 76.4304C48.1187 76.4304 45.5338 76.5493 43.7812 75.6341C42.0286 74.7189 39.3402 74.3001 39.0249 73.6227C38.7095 72.9453 29.4606 69.7085 29.4606 69.7085C29.4606 69.7085 16.8667 63.0175 12.3689 66.9887C7.87114 70.9598 7.87114 74.6362 8.54839 76.3115Z"
                        fill="#65617D"
                    />
                    <path
                        d="M49.1699 37.9448L50.7881 43.3275L52.8561 55.4528L60.5385 55.9699L62.7616 52.2832L64.9795 48.6016C64.9795 48.6016 66.365 43.6998 67.3576 38.9634C68.2365 34.7648 68.8104 30.6903 67.8746 30.2559C67.0267 29.8629 66.4684 28.4513 66.1065 26.9311C66.06 26.745 66.0186 26.5537 65.9824 26.3624C65.7231 25.0758 65.5504 23.7733 65.4655 22.4636C65.4655 22.4636 49.3664 21.6312 51.6153 28.2704C52.0171 29.4026 52.2217 30.5953 52.2202 31.7968C52.2192 32.0974 52.2019 32.3978 52.1685 32.6965C52.0584 33.7311 51.7351 34.7315 51.219 35.6348C50.7029 36.5381 50.0052 37.3247 49.1699 37.9448V37.9448Z"
                        fill="#EE8E9E"
                    />
                    <path
                        d="M45.8105 37.0555L46.3844 46.2025L47.6924 53.9896L49.1555 57.6091L50.4635 77.3458C50.4635 77.3458 63.0625 78.8039 66.1282 77.3199C66.3474 77.226 66.5381 77.0762 66.6814 76.8856C70.3624 71.2805 69.1733 55.1117 69.1733 55.1117L70.5847 44.6616L69.6437 39.2323L67.369 38.9945L65.6164 38.8032C65.6164 38.8032 65.2235 39.2892 64.6548 40.0441C63.1039 42.1124 60.2552 46.1146 60.4465 47.8002C60.705 50.1012 60.1311 52.4539 59.2419 52.821C58.3527 53.1882 57.6237 53.8138 57.4635 53.183C57.2454 52.6545 57.1914 52.0725 57.3084 51.5128C57.4635 50.6235 56.6311 47.8933 56.6311 47.8933C56.6311 47.8933 55.2197 44.7082 55.3231 43.3483C55.4265 41.9884 55.168 40.4216 54.7493 40.0545C54.3305 39.6874 53.7567 39.3202 54.2323 37.6501C54.7079 35.98 52.1643 32.7224 52.1643 32.7224L45.8105 37.0555Z"
                        fill="#E3E8F4"
                    />
                    <path
                        opacity="0.1"
                        d="M62.461 59.8998L62.978 75.5309L65.9972 77.201C66.2171 77.1106 66.4082 76.9623 66.5504 76.7718C70.2521 71.1771 69.0371 54.9876 69.0371 54.9876L70.4485 44.5323L69.5076 39.1083L67.238 38.8652C68.1169 34.6718 68.6908 30.5921 67.755 30.1577C66.9071 29.7648 66.3488 28.3532 65.9869 26.8381L64.3584 37.8931C64.3584 37.8931 64.4928 38.8911 64.5393 39.9201C64.6084 40.5707 64.5646 41.2285 64.4101 41.8643C64.043 42.8053 64.3067 44.4806 64.3067 44.4806C63.3606 46.1405 62.8901 49.217 62.6626 52.185C62.3421 56.1458 62.461 59.8998 62.461 59.8998Z"
                        fill="black"
                    />
                    <path
                        d="M66.017 26.5845C66.017 26.5845 68.6537 26.9154 69.486 28.0116C70.3184 29.1078 72.5207 29.2681 72.5207 29.2681C72.5207 29.2681 75.0281 30.1006 74.9764 30.3022C74.9247 30.5039 75.7054 30.8193 77.277 31.2433C78.8487 31.6673 81.4543 33.1771 81.4543 33.5443C81.4543 33.9114 85.5902 37.9859 85.5902 38.4047C85.5902 38.8236 86.8465 40.3903 86.6862 43.1618C86.526 45.9333 86.376 49.4339 87.0016 50.0079C87.6271 50.5818 87.0016 52.8311 87.0016 52.8311C86.8345 53.0755 86.7408 53.3626 86.7317 53.6586C86.7225 53.9545 86.7982 54.2469 86.9499 54.5012C87.4669 55.4423 86.8465 59.3617 86.8465 59.3617L86.8982 63.4414C86.8982 63.4414 86.3243 66.0268 87.0016 66.1043C87.6788 66.1819 86.8982 67.3608 86.8982 67.3608C86.8982 67.3608 86.3243 69.4291 87.0533 70.3909C87.7822 71.3526 87.9942 75.3599 87.9942 75.3599L99.1766 91.6167C99.1766 91.6167 99.3369 94.595 95.7801 94.5433C92.2232 94.4916 92.28 95.2207 92.3834 95.9032C92.4868 96.5858 91.3908 97.3097 91.3908 97.3097C91.3908 97.3097 89.9794 98.0439 90.8169 98.9333C91.6545 99.8226 94.0585 101.86 90.0828 103.22C89.6165 102.58 89.231 101.886 88.9351 101.152C88.5976 100.23 88.3179 99.2893 88.0976 98.3335C88.0976 98.3335 87.7305 94.3572 87.0016 93.8349C86.2726 93.3127 86.3915 90.7894 86.3915 90.7894C86.3915 90.7894 87.4255 88.7521 85.9728 87.9145C84.52 87.0768 63.2873 75.3186 63.2873 75.3186L62.7703 59.6874C62.7703 59.6874 62.4084 48.1361 64.6005 44.2684C64.6005 44.2684 64.342 42.593 64.7039 41.6519C65.0658 40.7109 64.6522 37.6808 64.6522 37.6808L66.017 26.5845Z"
                        fill="#3F3D56"
                    />
                    <path
                        opacity="0.1"
                        d="M52.3233 32.8772C52.3233 32.8772 47.0707 31.7965 45.6593 32.5256C44.2479 33.2547 41.4768 33.8338 41.0581 34.2526C40.6393 34.6714 39.595 34.356 38.654 36.838C37.7131 39.3199 37.6201 41.8071 36.4051 42.955C35.1902 44.1029 34.5802 44.8888 34.5285 45.7265C34.4768 46.5641 34.6836 46.7606 34.2131 47.0347C33.7426 47.3087 33.0602 48.3894 33.2722 48.8082C33.4841 49.2271 44.129 58.4258 44.129 58.4258C44.129 58.4258 44.646 61.9315 45.1216 62.8157C45.5972 63.6999 44.6046 75.939 43.5706 76.7767C42.5366 77.6144 50.6276 77.5316 50.6276 77.5316C50.6276 77.5316 50.9946 69.5066 51.31 69.093C51.6254 68.6793 51.098 60.1011 51.098 60.1011C51.098 60.1011 51.0463 52.7845 51.7236 50.8455C52.4008 48.9065 52.3284 42.4844 52.3284 42.4844C52.3284 42.4844 52.9282 38.6271 53.6571 37.7274C54.3861 36.8276 52.3233 32.8772 52.3233 32.8772Z"
                        fill="black"
                    />
                    <path
                        d="M52.1669 32.7019C52.1669 32.7019 46.9092 31.6161 45.4978 32.3503C44.0864 33.0845 41.3205 33.6585 40.9018 34.0773C40.483 34.4962 39.4387 34.1808 38.4978 36.6369C37.5568 39.093 37.4638 41.6007 36.2489 42.7538C35.034 43.9069 34.4187 44.6877 34.367 45.5202C34.3153 46.3527 34.5273 46.5543 34.0568 46.8284C33.5864 47.1024 32.904 48.1883 33.1159 48.6071C33.3279 49.0259 43.9985 58.2143 43.9985 58.2143C43.9985 58.2143 44.5155 61.7149 44.9911 62.6043C45.4668 63.4936 44.4742 75.7224 43.4402 76.5653C42.4062 77.4081 50.4661 77.3461 50.4661 77.3461C50.4661 77.3461 50.8331 69.3211 51.1433 68.9022C51.4535 68.4834 50.9365 59.9103 50.9365 59.9103C50.9365 59.9103 50.8848 52.5938 51.5621 50.6599C52.2393 48.726 52.1669 42.2988 52.1669 42.2988C52.1669 42.2988 52.7667 38.4415 53.4956 37.5417C54.2246 36.642 52.1669 32.7019 52.1669 32.7019Z"
                        fill="#3F3D56"
                    />
                    <path
                        opacity="0.1"
                        d="M51.6139 28.2753C52.0158 29.4075 52.2204 30.6003 52.2188 31.8017C54.7892 32.5659 57.5416 32.4458 60.0356 31.4606C62.5297 30.4753 64.6213 28.6819 65.9758 26.3673C65.7165 25.0807 65.5438 23.7782 65.4589 22.4685C65.4589 22.4685 49.365 21.636 51.6139 28.2753Z"
                        fill="black"
                    />
                    <path
                        d="M43.6738 20.0127C43.6775 23.0749 44.8559 26.019 46.9661 28.2377C49.0763 30.4565 51.9573 31.7808 55.015 31.9375C58.0727 32.0942 61.074 31.0713 63.3998 29.0799C65.7257 27.0884 67.1988 24.2803 67.5154 21.2345C67.8319 18.1887 66.9678 15.1375 65.1012 12.7102C63.2346 10.2829 60.5079 8.66451 57.4833 8.18885C54.4587 7.71318 51.367 8.41648 48.8457 10.1537C46.3243 11.8909 44.5656 14.5296 43.9323 17.5256C43.7595 18.3433 43.6729 19.1769 43.6738 20.0127V20.0127Z"
                        fill="#EE8E9E"
                    />
                    <path
                        d="M35.9905 47.7173L33.1419 48.6066C33.2097 48.8935 33.1909 49.194 33.0878 49.4702C32.9847 49.7463 32.802 49.9856 32.5629 50.1579C32.3188 50.3324 32.1235 50.5667 31.9959 50.8383C31.8683 51.1099 31.8125 51.4097 31.8339 51.7091C31.8339 51.7091 31.5185 52.8622 30.7999 53.1207C30.0813 53.3792 29.5954 55.1114 29.5954 55.1114L27.1913 57.8778C27.1913 57.8778 26.3021 58.612 26.4624 58.9791C26.6227 59.3463 25.5215 59.4497 25.5215 59.4497L26.0953 68.757L31.0584 69.6981L34.1603 69.3826L36.6678 68.4416L38.8598 67.1386L39.8576 64.5532L44.2468 57.8623L35.9905 47.7173Z"
                        fill="#3F3D56"
                    />
                    <path
                        d="M26.2135 60.2098C26.2135 60.2098 19.8391 51.011 15.0828 55.9749C10.3265 60.9388 17.0163 68.9897 18.5828 68.7312C20.1493 68.4726 27.6249 68.0383 27.6249 68.0383L26.2135 60.2098Z"
                        fill="#EE8E9E"
                    />
                    <path
                        d="M41.29 56.2794L12.9845 41.8298C12.5929 41.6299 12.1133 41.7853 11.9135 42.177L0.857674 63.8414C0.657777 64.2331 0.813228 64.7127 1.20487 64.9126L29.5103 79.3623C29.902 79.5622 30.3815 79.4067 30.5814 79.015L41.6372 57.3507C41.8371 56.959 41.6816 56.4793 41.29 56.2794Z"
                        fill="#3F3D56"
                    />
                    <path
                        d="M38.587 57.5267L13.6016 44.772L3.99119 63.6039L28.9767 76.3587L38.587 57.5267Z"
                        fill="#FF3378"
                    />
                    <path
                        d="M7.86244 54.134C8.11655 54.134 8.32256 53.928 8.32256 53.6738C8.32256 53.4197 8.11655 53.2136 7.86244 53.2136C7.60832 53.2136 7.40234 53.4197 7.40234 53.6738C7.40234 53.928 7.60832 54.134 7.86244 54.134Z"
                        fill="#E6E8EC"
                    />
                    <path
                        d="M34.9045 68.2914C35.3242 68.2914 35.6644 67.9511 35.6644 67.5313C35.6644 67.1115 35.3242 66.7712 34.9045 66.7712C34.4848 66.7712 34.1445 67.1115 34.1445 67.5313C34.1445 67.9511 34.4848 68.2914 34.9045 68.2914Z"
                        fill="#E6E8EC"
                    />
                    <path
                        d="M22.09 62.1436C22.0383 69.0465 36.302 70.5046 36.302 70.5046L39.9209 71.0838L41.5547 71.3423L42.2371 64.6204C42.2371 64.6204 41.4874 64.5118 40.5517 64.2946C39.1713 63.9688 37.3825 63.4156 37.0103 62.6348C36.4054 61.3163 22.1417 55.2458 22.09 62.1436Z"
                        fill="#EE8E9E"
                    />
                    <path
                        opacity="0.1"
                        d="M43.9316 17.5252C44.2601 17.549 44.5696 17.6882 44.8054 17.9182C45.2138 18.3473 45.2345 19.1023 45.7566 19.366C45.9525 19.4546 46.1712 19.4799 46.3822 19.4384C47.7729 19.2419 48.5742 17.6751 49.908 17.2408C50.6894 17.0455 51.5135 17.1165 52.25 17.4425C52.549 17.5416 52.8153 17.7203 53.0203 17.9595C53.4701 18.5387 53.1547 19.3918 53.3615 20.0899C53.651 21.062 54.8091 21.4446 55.812 21.5739C56.815 21.7031 57.9472 21.7703 58.6141 22.5253C58.8384 22.8075 59.0005 23.134 59.0896 23.4834C59.1787 23.8327 59.1928 24.197 59.1311 24.5522C59.0717 24.7968 59.0717 25.0521 59.1311 25.2968C59.4103 26.0827 60.7648 25.9638 61.1215 25.3485C61.38 24.8986 61.2973 24.5211 61.9073 24.397C62.3466 24.362 62.7876 24.4385 63.1894 24.6194C64.2522 24.9896 65.3731 25.1647 66.4982 25.1365C67.2144 23.6091 67.5996 21.9475 67.6288 20.2608C67.6579 18.574 67.3303 16.9002 66.6673 15.3489C66.0043 13.7977 65.021 12.4042 63.7817 11.2597C62.5425 10.1152 61.0754 9.24559 59.4766 8.70794C57.8779 8.17028 56.1835 7.97669 54.5047 8.13987C52.8259 8.30304 51.2005 8.81931 49.7351 9.65479C48.2698 10.4903 46.9975 11.6261 46.0018 12.9878C45.0061 14.3495 44.3094 15.9063 43.9575 17.5562L43.9316 17.5252Z"
                        fill="black"
                    />
                    <path
                        d="M59.105 24.9661C59.0455 24.7197 59.0455 24.4627 59.105 24.2163C59.1663 23.8619 59.1519 23.4986 59.0628 23.1501C58.9737 22.8017 58.8119 22.4761 58.588 22.1946C57.9211 21.4345 56.7889 21.3621 55.7859 21.238C54.783 21.1139 53.6249 20.7209 53.3354 19.754C53.1286 19.056 53.444 18.2028 52.9942 17.6288C52.7922 17.3863 52.5248 17.2069 52.2239 17.1118C51.4891 16.779 50.6627 16.7078 49.8819 16.9101C48.5481 17.3393 47.7467 18.9112 46.356 19.1077C46.1449 19.1438 45.9278 19.1186 45.7305 19.0353C45.2135 18.7716 45.1825 18.0011 44.7792 17.5823C44.1485 16.9101 42.9439 17.3445 42.1633 16.8481C41.6971 16.4556 41.3961 15.9016 41.3206 15.2968C40.9762 14.1756 40.8966 12.9897 41.0879 11.8325C41.5429 9.88826 43.28 8.55422 44.3915 6.89441C45.4255 5.34319 46.0045 3.38866 47.5606 2.36485C49.1168 1.34105 51.1072 1.57375 52.8598 2.09082C53.6675 2.37616 54.4976 2.59405 55.3413 2.7423C56.7579 2.91811 58.1744 2.5303 59.5961 2.48377C61.6059 2.41955 63.5809 3.01926 65.2158 4.19013C65.5827 4.43281 65.8944 4.7499 66.1309 5.12086C66.3663 5.64485 66.5047 6.20724 66.5393 6.78067C66.7059 7.86242 67.0798 8.90179 67.6405 9.84173C68.0799 10.576 68.6331 11.243 69.0312 12.0031C69.4712 12.7493 69.6047 13.6372 69.4034 14.4799C69.269 14.909 69.0054 15.2968 68.8864 15.7363C68.6538 16.7705 69.3259 17.7323 69.786 18.6733C70.227 19.5339 70.4372 20.4942 70.396 21.4603C70.3702 21.9423 70.2453 22.4137 70.0292 22.8452C69.813 23.2767 69.5103 23.659 69.1398 23.9682C68.364 24.5077 67.4375 24.7882 66.4928 24.7696C65.3453 24.8056 64.201 24.6303 63.1168 24.2525C62.7159 24.0746 62.2773 23.9982 61.8399 24.0302C61.2298 24.1595 61.3229 24.5473 61.0489 24.9816C60.7387 25.6383 59.3842 25.7469 59.105 24.9661Z"
                        fill="#3F3D56"
                    />
                    <path
                        opacity="0.1"
                        d="M52.6615 92.4597L59.3824 87.1804L69.9962 76.7304C69.9962 76.7304 68.5693 76.658 66.491 76.5701C66.0821 76.9423 65.8199 77.4485 65.7517 77.9972C65.7 79.2744 62.8876 78.0851 61.4245 78.8193C59.9614 79.5536 52.8011 88.7161 51.5448 88.6437C50.2886 88.5713 49.2959 88.0077 48.7738 88.8971L48.7376 88.954C48.5291 89.1927 48.2504 89.3592 47.9414 89.4297L52.6615 92.4597Z"
                        fill="black"
                    />
                    <path
                        d="M39.0723 92.0979L42.4482 102.91L42.9652 104.611L44.5782 104.166L48.1351 103.189L63.9756 98.8406C65.961 98.7402 67.9011 98.211 69.6625 97.2893C72.6517 95.616 76.0707 94.869 79.4853 95.1435C81.5532 95.34 83.9055 94.4351 85.8391 90.8673C85.8391 90.8673 90.2283 77.9043 79.1492 74.1917C68.0702 70.4791 67.5377 76.1669 67.5377 76.1669L67.3877 76.26C66.9586 76.5341 65.7541 77.3976 65.7075 78.442C65.6558 79.7192 62.8434 78.53 61.3803 79.2642C59.9173 79.9984 52.757 89.161 51.5007 89.0886C50.2444 89.0162 49.2518 88.4526 48.7296 89.3419L48.6934 89.3988C48.3057 89.9159 47.1425 90.0555 46.3722 90.0813C45.9534 90.0813 45.6484 90.0813 45.6484 90.0813L45.5501 90.1124L44.7436 90.3502L39.0723 92.0979Z"
                        fill="#65617D"
                    />
                    <path
                        opacity="0.1"
                        d="M39.9473 71.0836L41.581 71.3421L42.2634 64.6202C42.2634 64.6202 41.5137 64.5116 40.578 64.2944C40.8262 65.2148 40.2678 68.8498 39.9473 71.0836Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M82.6867 39.5993C82.6867 39.5993 87.5464 38.1877 86.3418 52.0091C85.1372 65.8304 76.1519 74.5379 76.1519 74.5379C76.1519 74.5379 65.8122 79.083 61.1593 78.3539C56.5064 77.6248 53.1098 77.4645 53.1098 77.4645C51.646 76.723 50.0437 76.2951 48.4052 76.208C45.8202 76.1046 40.304 74.4862 40.2006 73.9588C40.0972 73.4314 41.5602 65.7528 40.9295 65.1686C40.9295 65.1686 48.2501 65.4684 48.979 66.001C49.708 66.5336 50.7575 66.151 51.564 66.001C52.3705 65.8511 54.7486 63.7569 59.5049 65.5874C59.5049 65.5874 61.1283 65.7425 61.7538 65.3288C62.2654 65.0886 62.8486 65.0499 63.3875 65.2202C63.7916 65.0832 64.1745 64.89 64.5249 64.6463C64.68 64.4395 65.9362 64.6463 65.9362 64.6463C66.0106 64.6827 66.0922 64.7019 66.175 64.7025C66.2578 64.7031 66.3397 64.6852 66.4146 64.6499C66.4895 64.6147 66.5556 64.5631 66.6079 64.4989C66.6602 64.4348 66.6975 64.3597 66.7169 64.2792C66.883 63.8516 67.1325 63.4614 67.451 63.1313C67.451 63.1313 68.8624 55.1839 71.5249 52.2055C71.7397 52.0212 71.9048 51.7859 72.0051 51.5212C72.1053 51.2565 72.1375 50.9709 72.0987 50.6905C71.8661 49.8218 76.4104 37.9033 82.6867 39.5993Z"
                        fill="black"
                    />
                    <path
                        d="M82.5578 38.5188C82.5578 38.5188 87.4175 37.1072 86.2129 50.9286C85.0084 64.7499 76.0231 73.4574 76.0231 73.4574C76.0231 73.4574 65.6833 78.0025 61.0304 77.2734C56.3775 76.5444 52.9809 76.3841 52.9809 76.3841C51.5174 75.6418 49.9149 75.2138 48.2763 75.1276C45.6913 75.0242 40.1751 73.4057 40.0717 72.8783C39.9683 72.3509 41.4313 64.6724 40.8058 64.0881C40.8058 64.0881 48.1212 64.388 48.8501 64.9206C49.5791 65.4532 50.6286 65.0705 51.4351 64.9206C52.2416 64.7706 54.6197 62.6765 59.376 64.5069C59.376 64.5069 60.9994 64.662 61.6249 64.2432C62.1376 64.0062 62.7202 63.9693 63.2586 64.1398C63.6627 64.0027 64.0456 63.8095 64.396 63.5658C64.5511 63.359 65.8074 63.5658 65.8074 63.5658C65.8817 63.6022 65.9633 63.6214 66.0461 63.622C66.1289 63.6227 66.2108 63.6047 66.2857 63.5695C66.3606 63.5342 66.4267 63.4827 66.479 63.4185C66.5313 63.3543 66.5686 63.2792 66.588 63.1987C66.7541 62.7711 67.0036 62.3809 67.3221 62.0508C67.3221 62.0508 68.7335 54.1034 71.396 51.1251C71.611 50.9407 71.7766 50.7056 71.8777 50.441C71.9788 50.1764 72.0123 49.8908 71.975 49.61C71.7372 48.7621 76.2867 36.8435 82.5578 38.5188Z"
                        fill="#3F3D56"
                    />
                    <path
                        opacity="0.1"
                        d="M44.8066 90.376L51.7136 98.732L51.755 98.6854C51.8067 98.5251 52.4839 96.7464 52.3288 96.643C52.1737 96.5396 50.9692 93.9232 48.5652 92.827C47.344 92.2319 46.3194 91.2987 45.6131 90.1382L44.8066 90.376Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M44.9038 104.833L45.6586 105.268L49.1483 102.45C50.8699 101.053 52.5811 99.647 52.607 99.5695C52.6587 99.4143 53.3411 97.6356 53.1808 97.5322C53.1033 97.4753 52.7414 96.7566 52.0796 95.9138C47.4267 94.6056 50.3839 97.8528 50.7768 97.9821C50.7768 97.9821 45.0899 96.6739 44.7693 102.879C44.7269 103.533 44.7721 104.191 44.9038 104.833V104.833Z"
                        fill="black"
                    />
                    <path
                        d="M50.6725 107.465L51.6651 108.039L61.7516 108.298C62.8837 108.986 64.0801 109.563 65.3239 110.02C65.4929 110.071 65.6658 110.107 65.8409 110.128C66.7764 110.205 67.7157 110.222 68.6533 110.18C69.4236 110.18 70.0234 110.128 70.0234 110.128C70.0234 110.128 69.5425 97.4084 69.1858 96.0692C69.01 95.428 68.1519 95.5521 67.335 95.8882C66.7078 96.1431 66.1026 96.4492 65.5256 96.8034C65.5256 96.8034 61.2397 97.2171 60.5625 97.5894C59.8852 97.9617 57.9465 97.3774 56.7471 97.5894C55.5477 97.8014 53.4022 96.1726 53.4022 96.1726C47.5499 94.2387 50.8172 97.8479 51.2567 98.003C51.2567 98.003 45.5698 96.6948 45.2493 102.9C44.9287 109.105 50.6725 107.465 50.6725 107.465Z"
                        fill="#3F3D56"
                    />
                    <path
                        d="M65.2521 102.548C65.3658 105.185 67.4183 108.453 68.6435 110.18C69.4138 110.18 70.0136 110.128 70.0136 110.128C70.0136 110.128 69.5328 97.4078 69.176 96.0686C69.0003 95.4274 68.1421 95.5515 67.3252 95.8876C66.3119 97.7853 65.1952 100.428 65.2521 102.548Z"
                        fill="#565387"
                    />
                    <path
                        opacity="0.1"
                        d="M65.2521 102.548C65.3658 105.185 67.4183 108.453 68.6435 110.18C69.4138 110.18 70.0136 110.128 70.0136 110.128C70.0136 110.128 69.5328 97.4078 69.176 96.0686C69.0003 95.4274 68.1421 95.5515 67.3252 95.8876C66.3119 97.7853 65.1952 100.428 65.2521 102.548Z"
                        fill="black"
                    />
                    <path
                        opacity="0.05"
                        d="M63.5335 102.899C64.2262 105.443 64.2211 108.292 65.3274 110.019C65.4963 110.07 65.6693 110.106 65.8444 110.128C66.7799 110.204 67.7192 110.221 68.6568 110.18C69.4271 110.18 70.0268 110.128 70.0268 110.128C70.0268 110.128 69.546 97.4078 69.1893 96.0686C69.0135 95.4274 68.1553 95.5515 67.3385 95.8876C66.7113 96.1425 66.1061 96.4486 65.529 96.8028C65.529 96.8028 62.6443 99.6416 63.5335 102.899Z"
                        fill="black"
                    />
                    <path
                        opacity="0.1"
                        d="M28.7344 77.1074C28.7344 77.1074 33.744 78.7362 37.9885 84.5171L28.7344 77.1074Z"
                        fill="black"
                    />
                    <g opacity="0.1">
                        <path
                            opacity="0.1"
                            d="M69.447 14.387L69.416 14.5007C69.3672 14.6493 69.3085 14.7944 69.2402 14.935C69.2937 14.7469 69.3629 14.5636 69.447 14.387V14.387Z"
                            fill="black"
                        />
                        <path
                            opacity="0.1"
                            d="M41.1004 11.853C41.1898 11.4946 41.3199 11.1477 41.4881 10.8188C41.4881 10.9068 41.4364 10.9946 41.4157 11.0877C41.2194 12.2464 41.2991 13.4352 41.6484 14.5573C41.722 15.1627 42.0233 15.7173 42.4911 16.1085C43.2666 16.6256 44.4711 16.1757 45.107 16.8479C45.5103 17.2719 45.531 18.032 46.0583 18.2957C46.2549 18.3817 46.4728 18.407 46.6838 18.3681C48.0694 18.1716 48.8759 16.5997 50.2097 16.1705C50.9888 15.9682 51.8136 16.0394 52.5465 16.3722C52.8464 16.4726 53.1141 16.651 53.322 16.8893C53.7666 17.4684 53.4564 18.3164 53.6632 19.0196C53.9475 19.9866 55.1056 20.3744 56.1085 20.4984C57.1115 20.6225 58.2437 20.7001 58.9158 21.455C59.1377 21.7376 59.2983 22.0633 59.3873 22.4114C59.4763 22.7595 59.4918 23.1224 59.4328 23.4768C59.3715 23.723 59.3715 23.9804 59.4328 24.2266C59.7068 25.0125 61.0613 24.8936 61.418 24.2731C61.6765 23.8232 61.599 23.451 62.209 23.3269C62.6467 23.2892 63.0867 23.3658 63.486 23.5492C64.5708 23.9242 65.7146 24.0994 66.8619 24.0663C67.8084 24.0806 68.7357 23.7985 69.5141 23.2596C69.8523 22.9925 70.1292 22.6556 70.3257 22.272C70.1517 22.9695 69.7562 23.5918 69.1987 24.0456C68.4226 24.5845 67.4964 24.8649 66.5517 24.847C65.4042 24.883 64.2599 24.7077 63.1758 24.3299C62.7732 24.1515 62.3328 24.0752 61.8936 24.1076C61.2836 24.2369 61.3767 24.6247 61.1027 25.059C60.7511 25.6795 59.3966 25.7933 59.1174 25.0125C59.0606 24.7658 59.0606 24.5094 59.1174 24.2628C59.1801 23.9084 59.1663 23.5447 59.0772 23.196C58.988 22.8474 58.8255 22.5218 58.6004 22.241C57.9335 21.4809 56.8013 21.4085 55.7984 21.2844C54.7954 21.1603 53.6374 20.7673 53.3478 19.8004C53.141 19.1024 53.4564 18.2492 53.0066 17.6752C52.8036 17.4338 52.5366 17.2545 52.2363 17.1581C51.5016 16.8254 50.6751 16.7542 49.8944 16.9565C48.5605 17.3857 47.754 18.9576 46.3685 19.1541C46.1573 19.1902 45.9403 19.165 45.7429 19.0817C45.2259 18.818 45.1949 18.0475 44.7917 17.6287C44.1558 16.9565 42.9563 17.3909 42.1757 16.8945C41.7079 16.5033 41.4066 15.9486 41.333 15.3432C40.982 14.2143 40.9023 13.0185 41.1004 11.853V11.853Z"
                            fill="black"
                        />
                    </g>
                    <path
                        opacity="0.1"
                        d="M70.2583 53.6895C69.2967 54.9822 68.1903 56.1767 67.358 57.5469C66.4408 58.8843 65.9934 60.4884 66.0862 62.1075C66.9651 61.2078 67.3684 59.9668 67.9215 58.8396C68.8573 56.9264 70.2531 55.308 71.437 53.5499C71.6593 53.2138 73.1017 51.2748 72.3727 51.1869C71.7679 51.1093 70.584 53.25 70.2583 53.6895Z"
                        fill="black"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="54.1129"
                            y1="109.807"
                            x2="54.1129"
                            y2="0.570576"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#808080" stop-opacity="0.25" />
                            <stop
                                offset="0.54"
                                stop-color="#808080"
                                stop-opacity="0.12"
                            />
                            <stop
                                offset="1"
                                stop-color="#808080"
                                stop-opacity="0.1"
                            />
                        </linearGradient>
                    </defs>
                </svg>
                <form onSubmit={onSubmit}>
                    <input
                        placeholder="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        placeholder="email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value=">" />
                </form>
            </div>
        </div>
    );
};

export default Register;