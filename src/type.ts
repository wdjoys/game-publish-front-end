/**
 * @Author: xiaocao
 * @Date:   2023-01-30 11:22:39
 * @Last Modified by:   xiaocao
 * @Last Modified time: 2023-02-04 15:19:05
 */

type UserInfo = {
  username: string;
  password: string;
  email?: string;
  phone_number?: string;
  token?: string;
};

type Ad = [
  string[],
  {
    [propName: string]: number;
  },
  number[]
];

export type { UserInfo, Ad };
