const fontSize = 60, scaleRate = 9, message = '21', inpactRange = 150;
let canvas;
let textData = [];
let dotsCordinate = [];
let img = [];
let imgs = [];

function preload() {
// 삭감
img[0] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBWQwMsIlEOURPb2S2wzU9cUEuSCuv3FkwJYH69cxQpDbkNBiiqjzMJSt84KGBPkel--5VumY4wXbjkcbQcJ_xqXoCRlvGxFxZWguv3dapsV72OTKlx_WSoCsf9kR893KqUZCL_GbzqORQhbxKoOonpMbBhK-4gUZ4FtG3HBOkP6bm0q7uGxH6q8DtWAPdfTje3Wb4gcHMnJjQeyGa5DB9XZP9HKTJ1rVTB7V3fdtTY1lI1YYbs6xmA8TXI50OJoSwT9NQJRzyWE-zSk8eNIp4iV8TNK9CdhcQU0855U6ccgRv3rHRKN-sA8zKW6oeClNCCDJZCBZJJcj415tPUZFsug6sYARLtrC9NnZTdGA32sKZ04wMiRje8MmAoLah-5wjis4JOO7RfXSAxwDzb5wUmCAJWygEuFdCBVfIkcicVEvUrNeNpy0SsX1CwoJiVrZPbyJhjOggR5bPRHhmeXcT8bXe_EgIIwe43LcBDDE00s2r6AEutSVWqHRs-9PpOkYlz_T9X-81OynAuB5CV8ebtLW-aLE0LO71wv0wjtt-l2Mt9RceT6-wmRkaIaGkvJqrT3f_FbmjiLHE-2HgNUdvLIjZIOKEByMbAuLBVsaML21VmqPyzb3xafd2h1qRtSVcViBhOEpKWX9CIulzb4Sqy2vwHVR0KHEc_Upu-j47-aT_LuDhlBipXO0Uwbuiv7-89qrT4J70XwBcWQalofxLLQtuDkLLvyJxEHCes-ZUNd02G051ptYECp2AZO0Xre9qgGrOkuCRSkuzYnXApPJsdx-L3ThBF3n4QoEDunCWnPjAO5cnhRxsrWtU37oXG3qAWVePJbGaRH27yCqA2xsdJI6IzQmy3XVORK5807Kf56XXKVoF-Ofs1IP68K-d588n8hAAehqtEw1XecxFwTsWoPI_328qESDTIpAvBkhwwfNNo-aGvUeCDSF-MsWFdVizjK0TWRV20LavBu50Son6F3Pr9-zLo3HKJoRLxcSmOSXfp0jpJh9-gqjxtnwutIpKCta8N1Uu6Wr_vNAlVqTPdE5lWKVh1SM7Jd-LcVZPZNl08mXkCL_uKktTkuvtCsPgn2LEqhDavGSWRn4d2DtJ2TeTVvMAlyekjNSZoW_PYkVXMX82coC4uka4rZy3ozamlddBkZKecef5nDNo_u725ITDeD55X-UP2ZxNH2dxJiegZOO4avE9X5zfpCeDcyKBwE6bXD6oPCBfhnKaApp195nng3FlOQ9e9bTHQJjsTfEj8u6sOifJ6Kwq9tcwj3enZVYGOuNx5w7j-lUSSNUB385li6V7u104xI4FrcPQnqXy6ABt_ysYdwpV0qlpS-DWRo5vwxO_DOJEVAYzGagxqHKklDjiY9ETXUlP0q6IsES70xZkz66uFqzJmMMbKQN2LvcH7v3W2lADx7S5FpZekNNP7cX_Xbfub98mCMpo7TGK7B0vNVzWYll-MWdaLUF0RyhKcYMHYC13RoPZ3Y7VI-oc2rv00vh3njLeV_ZLACUzeeXfjq4WWLa59zTldx8dK3shSAa9DP8DYNAnXOkNoGEMp4kA=w1398-h901');
img[1] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBTB0iGy6x-LXj13QIJ1OZeRYIPp1PUXuP-8Cah4G110DCSMlMkcUytIGVmRe0EazGcXiSDXEkIHt6aRYDVsejwkGl9dTJDkwvQvhd8UUhxH7Hl7q8pNswLFp54RJNTI3pNitfoXGDuJEL3EDx5MbMLkoz26VuEtQeC4xZYXZHQHF3SoP6J4AkO-phospVZ0EFsqNg2XE1Td5fny89sj_td2Vi7kMmzIsNdNtjUUWhKfYPVtQuqlKG4eBBKFtnv9-OME-LB7mYrFHkqGOnAlXCJcdVSi9unEl3DFjO1GCuzeoax2njlCyVKmU6yKBKRS-QC-Rq1rlp4msfFAg5wCF5J6o69N9Css2EPee2sbhqmdcs4p7px5WiYQpXKmkrJsBKg4hCcunYhJfKtSveMq8rZXPpGfH1sCD8fWRguqyXJFwFc-uXHdwleiqQ4WyllGc7An-te8-8p8NE1NtPy-eV_uyg4kGDTrjSIaJIAx2dZ2htNc1MCdPnjTlcQtZawClqUZmehWwv5V78uxcyNLOpDj5CUTPfMKtPfGCxqUCwHX55wALU9omNj1IiAPakuzXAAO_TPVuRgK-hMcsZkZ3zuWxRBVW-uxjKzg1a0DyN0Q1lq_pxvUwlRKV12uuJl4z-Y9aGiAfSSjoOee_BIDIdrOV9m-dCAEl-gakhtRsbC36dUPCI7YrOmD84D-yOefEIPMTUrrSQpCasVLwyqzdq58-1wXGnOA3Tb0SRiivMxC2Y1WTcczYjmGYoFcjMIm76O4DXJyocfAVehkPG8_Bai9O8aEWZpbU3IaOmQrP10gXCnCCnkeQEjDXsnXtrdV2Y5NVeVjSeMVS-dC37dMhSZKc1wRhpLkxWFE5yKW3NVdzrDSYJ6HvmNS1X4e37iPaB3GgqHttTyXuC0oKsKR8k3c6nmSh60HGi20pRN7nmqeKMYHFLM6aowYtdPx1e0GTdKrSMZ1HomV8pcq6ce8EzJ_LB3iTLFJDHIbPJJ3JpTLw4SW_f60ryG8e99gIXhm7HRdIzVpA7UESO-Ctvh_A96esPuDqoI2NuCaVboSV1E5TWMccfRBA0rnLW25zlzJWH_hJgvhfq_nVixV3voZ-dOGCOGfpt7bN3z8oLvTuYpjQFqUPbruzqv2_EYVLN4FrutS5FLeLEJOXWWCYs_wPD3IaaESom1nnHd71yb8rXsPC6mKGUP1EMNMUeNSdN84b6MFTNcbCv0PwSbDxP8qpMaJ944tTvg-oyFqKxWhdjpTV6Yi8XdCqmy0aslXsNz5SDmOQlx3E6JVuT6rFTN_goGoh4YJnZj7W13Ct95YAj_q_uttjsRKsIEro-1Et-rL9_XLZ9DXTkwaiRX-2JP7OZmlj9bWVBdXhmTmSs0MN7iNoXjyu2d4z3peBjhQNvlrMUTho0JCg8EOkQY-0-t_fMlj6_DVa77qIlNQKZttfykLO1X5C3tX2EHfkCsSlla_PlxJb3FclngmoEB9AZs0tDbzasHliCRMMx_ueGqq4pfOF64i9yNLEtxCDG6cyuOvplUwuhlJRXhu81bYLxp6yHR7CpBsV8=w310-h901');
img[2] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypCrdRccF7zDMxVVwRvcBS7SEeQh5Ng8L7gMrzvJw6L-5ZbXifbIa_CBmAIjPN57-vD0FreA9YwkuqEOCVR9LV7ap4SfC-8VC5rveX69SBrdQ-FCBs9wjsQG5YqbcBbZ9ivq8FHNS5VXRCskaVviMgUdLtlIzopP05-sq2_2hh3smTa-2qaVIPO6EcObAAZhIkWOqLHdVrpmj5IgLeRsUD3oerqAWAOv9ELjx_IS68pH26vNogYPJd0vVNSVUu5qY0sVGg5JBDgR2ZxcWnAPoPkrtq5kqe9oNMG2P1cKE7vcvOhufwgWFTWwIhE4MZIdk86c6-Xdz099Y9_B3OsPoTZxHWDXPGjB7mQvEEMisEd0UVFgX49-8TMoKjaGpdkSWoozsGiNLKKndVUlJhVWMEFQr62PKaXqEMmMnjAWFP9M-uAUZzAB_haVaOCxh226ooBMH72_e_dWPDsDZfvmZCAtEJEtfgxIExIHLCJZxiQmPNJ8XTkzWOOBob5IZrHf6RmTC0iw5m4Yh8X3gHzjbkArnX8k6BI1EgQcPmfPF9Zvq-yYg5wr7MonSxnfp-W2KmSq9h4mDcIQ0lIcxF3-6-XolA9XPFY927wO_Wn2JVe2O_tpId84hQ7P0H11WCrTwF8SiiLg2PmK4lDTramCGrptwLHHGlRLsAM5Lb1TrPqWIihzP64kuf80VYv1O79sJ8n41WLUYGthEbs_F0ykuo7Zs_UZD6NJd7owKelBpkYEkU580xK5sWu_TDNPDPA7qDTY6JSf-TGQk_2SFupXqTmNYjwvmd0XXQab1WJaMIwJNDIKMI_jvuZ_BEcpkhV0TTvC9q68PYjV7WDhgSXXZkiCfLf38o7yfv9NlBx3BqsiE46maxiGUTDpf4srbt3KxyvncukIZLzgxVyCyRe0SZSEWIUaT7SHB1xpfOqqKe49RzDZ2kBWbbQSIF1UdIiNqXaavBFzyHiqal5aUcoZ_ENVG3NdR2ydDKPHxRI4Z9l3kAUG1LaleUPh96mhXrfqsFuP3q6o2xNDkfN8KM7J4pwqoBzycPNB8SgTeW25gFH-2GOdJEPOkohnkj908fUk2GLZhn6ydt9Q9wOj99iVOHxstE_gOrgHlVipm-VWhFcvvtnMSXI1zJ5vT-KT3LMbrtwYt6atHmbaCKYor6sq4rkmur-91Nk3ra8_MiS2mo4AmOLY60KhWPrj4DeStHIiAUGlOR2pXn5ax-GbPlwKjhkDwu6GghCk8wW1tl_nrvq1bDqnmHUGbP0UVLdWxDHJOFna00m-ZkkxwMFmkcgj4_KfS1O8HVD48_gBgCeFS9-6kerl3Z84LlTFYcU7d84Qr3I4ibK1VsEQJdSx86p3JWYIoK4y0Pakifs2Q4B536fQfyeWWYrmSKWcP0VEvTutltogwwAKbaQ_sywOa_O1t1X5I3UH7Jrf9KYgIuzJesXB4-o-adxjfBquFj66vjJRKjkx9rgFpbIpYJDe9KoEdl4cUabFNTd2y-XmyFJxZ9PUC2QIOEHHcvSQQSTcbztAWEsrQCqns6TBzzPQonkupmS8MRKzQEM=w310-h901');
img[3] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypAO0DlUlndUdiIf-oY4aMJRnYm9B3qJCYgE8O_2Ljh_UBmKIqT55z6fZK6Ar0c4g1K7N2uIVOrQV86TlaEYWrNnNXP2KZbU57T_HmDUiPuGdXIQabCqxpY7dbMfa_wcA2jkfjfFceWk1W-RkR5DLvSVbLH2p1UkpcAsE26nh_CTHgXeGAT4Wu8JMBDMqqoJljvZaKEf29jpZF-vXzq9S0qd4bb5gLcpKC6aJsvdMYEiJaA0NIYGG8crdeV0Fo81C4Dc9bL7z6KWdIWnPze0GU6iARdCix-IpjD-uVoI-oFYLPuo5A8h8NT27NSS2QFBvqJsvHJ0bshqx7d3v-_wG02nu7GsYr0PjW1Ga3ZhBm-Fvt9Pb89QXFiGdD1Fe6DGqhcuQ2e-Jn0wO-HASjtNlH1TuczZKCJgN8nXRVjBvuIdkLUhvWUAkjg6nUZMhIQmZnYWFSu3U1ynzXbOJPO450LZ88Tpp4FeZJ5Sn_KUkXHGJh2AdW2n8_Lp6n6K8Vh-KWSQV9NdnSb-OhuGkScMwqMRU8QH_huWnkvAIUnrFpDRKZ9au84gxm_QwvJREiZ8N7RDMjygYjF9NDR7Fo3uXcnuLehKLeBYrOu9jojc8dlOMwIfZSFCdxF4yfb5t7LDDqYsq2ZBRoQylNSwIK-dd_aBaELt1r4x39FvPqNMX9K6zNz-qmGGz-NCmaOZfUZOuzwZEcFilK1WO6Z7lwHcPrEIc5ZvxlTHfEdauYwYOgM4y9OlnGB41_3aLkTUjwJfHoC7_6b4vaezjZ14649DQ5R6AvY2yULYUI9Bd1fW_HcP6vyLuQ0AflxN5kV25ZoaVl-z42ONc8J69B1T4GNpS08wBM14ZiJI0pG4Q3jt5gF2H8UX2e-BMd6bKZMQIKcDj9o3hqR9bKM8RCbIclEMlQuqJc72zPbCn8EraDKZH415-FG0Cinm17ppi379qydAYKaw6fJV8VfMwAofPwmwvExH1kZudFebM5aJ8MWLJ9EtNlOIwF3n6jrgqtR-ZoJHiwyUaQ6hgXVcYQjRLp3FyhK34XU8UA-E_WtWc_Xuc94KafyN259hgrsGVy0244gh6_FdVW73dKljnc33n77AC2e25JawQFHvwwLNKs8HrFvoLZ1Bqi_zHuTenfEBdI6cA88ONaALnsp9nS6SM3iQ0fN0niCdK2CKh30L1b8-2QCJ3CHWSL1-jstw5eszX8bOdhOsxjl3CE9Odu2lCxcdav-4UhEtuJUX7PgpXGW52FSqEN_K1b1-ZQNpWzK_pgGD2MS_V0v-M3o4q2QraMlLCzNgvx1hkXj73Lw_fahGL_s5_H4AdfkNzkzg_S9zrDZ9xnQ9rhiZac_SwPw-mbKYstTzo6LdUZb2VJg8VEC3OJQoN5wFxoZc5Z7vI6Mdr0t6NU_hQXusK_Zy_PjmYSGgvMD1GhLqlGuplKI4C_9VPZoJpZ1Uif93Qx458Zcny0720DhPjuCU52SU9Ng1yv0Ith6ieMNW3UTAaKdZ5AGLV7THYD39vsff5akiYxZks8m_z3B71UOWHL7YHctIuzee7bqQ7pURoh8=w310-h901');
img[4] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBr4zA0wrwpda-PdXoamcU8LGQgNHuh9HfXJTuIFtfrUjRjuv6LrZh_fpbL247FEK6nnwu8tlker2mam3sHkyYBAzbJ092EIwDQ6P-TUC1pRFSAvy6sUMddVRdUXsh0l-1hKaBY0v0dUBlqWISIzogG4umzAq7kLqt5ZglaQyfMOCizh6Fxz64z-38C4Xy3LUTw6O_DPX06siGcHgqfuCkuNS74Us9Em9nfQbuEuDS9GXRgzpM0aXNCpmVh-0bNQkhwqqpBKo7FNy4qu-1Z9DwajnIFP8kADWWK84O6wCFlVngQw6DNuVWo4tlmTSvYO-WIWufjFOYjC4YbwtX2-rBKfSSAyO6KsEK0eSWkRLq3Ga6lTMa4_UoO3FDOMbfjnsjdIobasbqfHy8WZh3p3VGDY1JR98eetov2ND2fAxemxlcN-HgGktQl_IbSLtoKUrR8d2qijus1TJ0OFUhHr0MfFBKK9dYXv3WTh8c_U5aVt2obRsLqn-U4Nk5vMD-dJF0brZ0PJrz4WVxTpA9Sk33qaKSXO4wBrhIrcJmvuXA3JJ2MZi8YkVjcAzex196_8yE9weHH-I2FobE8WuIyp0HFgORbNyuXdeBBBY8IeARq9TvdJ83xkRll1YSTRNo2AGkGB3v4UHTTAsQj6h3urvmEw9-yj-74Y13oEYsVrkEbDTQDeTAPmZu1DmBdCbCVx-_oH_8ekv6Efe0u-xs6MGdk5pxDs2mhYrTXOpD4IJfc1yB3DZ4LNi_txBhBfKjIL_CVfLwwa-Eoqjiogfc2YqKdM9yiUZAlw3QlEgx8498emSB2j--PiyTrsY4tthV1Luoi07jw-SkXb83EuTOJeDHrfuyLnphuA0zPpnWo6Xrho2MMTs5j8z9oexvck_pC5nQuV6ptcef2qeU-TKIe2A0BaNhsykVOFHq830QHsmuWtsvh6ARBHkJKEu1fzljHYV_e41YvuhP9QK-T8kI-WO0GLsxnz_HHuDB6tqRQ6RCwdFYbpLtDi4S8a3Wk3WrS5yccvpDTNpQXZIzipxCi1YVEGr3QdSnBTyk1DszNMhOqwckZoq57HucjYss6fg-_pEfaUm-sDNmwnj1FmkHZBHEqlI8otGX1qI9Vu1-mYvnm2KHFGmbF7x5HJWFdP_B9-2SFJdKRRRyMMMRE-IIpS8Inttyw5zkgAmAZSQ0yKPZOZTs1nihmhMUTYu-MUllGhBLs-sN-EBOZ2sRdroGdsWxM96JAQ3kWk_gc9MeUiztJYAEXg_y4RlmCPFRZPpfcM3FMEkpkUSPdg_FTPN0Wk1csAaUoYNdkygbQkF3b7IBZU8JbqPQWoWJC6InPA6ObONsji8t18j9BT1goCJ2HZSHFdcg1kFh1jrsbp22pV3NGLnuK-piYpRs7PIIsFU04i4raGOervlaALecSmimrZeY3_lZWecEPpwiCORsoayDVwNg-hH-AvVBtzRTRBU6Q4C7vneYTjYG8WjIw34iuz5o7Q60gtDMsmWwrHkneWxU_lgmSOQKmTiwG4oWwvLMItxpHdHud8E4qHvY9gOYCqgsywQUJshs=w1398-h901');
img[5] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypAOHrsQBuN_hLRUmBD5A8z9lAOy6phJYbTZZLVL4H6w5oNhtHd46562gOxJP-0NgL68AdYRo4tqkicWhgrhJMeu1pDowQLywd656BNOuNomTWcmCNib6b9H36QbeAb9tqeWdEoegjQgzDUySnE2ABjv8sFZDSD744o0oGpQS8e6Lr8kUJZiL9KcZON4XOw_n16FOZEyw1RzySkZNYrcT8E2_GdRHjXdJ4gBPL6cIZ4WHjgTS-9pQqBT_PC0gB7a3zkHljq1Uw0TnfVeCKglGZEey2_IgSpl_Zn2Z6MpfPr8QZUEhrWTRtQmeJa8OJx8CkG6eMhYwm529r762dM2ic7K1z9mk5uIjGkpOVDUkKFrGg-S1D8Cyllfx6bsmZihFz9W9Fg8QS0idYJH8lnrI6JX0tzgeFvjVWQbcIk92g0PzJPQn-7baFO28j5S4irK-yP4u3DIaFdYm2mJDrE2lZKmNT82jRLModPI5KI8NHX0a4UqPjjUW9G3acaAU7f8J3SsQqhSZOvCf56bu1ArWZN6pKlhoV1eTK5Kg09nLpa1Bkgk3kN8NjpRGcSwJlu5GjuwPfkq82PuDxTWdaEjPaL4vSvjqMqFvBd7EYgncSZqsx2HURcomdMptmDxBCOxfatZ5amuGCgLnbhk2Qa7vp6fyIkoMXuocSMeC-pBXi0VV-_z7fZDrTi-QoVCoNGOibs8EemIMfopuZ_rDNY9S_lja1bzjvR5FR8cr1uEDMiOfn9FKoz1FPf-FAIcFABljs4H81adKfK2LGINowwtD6aNi6h8M-2bn2RXRVSIufi5dB30Sw4maElfbVgE8zcZ8J4fhw9hXZsBWS1fMRkZaHyUwFfxgzr6QUD-xCYLUrLW7EYp8JtbCfucasic9tA8dh42-nCBEvzjuRthtG7HayrcUxIFvysVqwL9UXRbxCp5wJpFMWPNe9gb1v54mwGot2VhiX5BlPRK4PePLvs6OgHHwdKTsm_SST7Gpv-VnOKmfUZTFKTKfqFc3N0fCswpz5mHMTWvR4X3vPvD8EWfAL4Kw6pWn94mgd18BjcVRsvrweNLmR0Hi2GmItI9gjAQG_FlHB-aSxLlU4N5yepfiGING2RzT4X7OCRVRDtAKJSq62wxaTMSeU6iqojEyxliH1Rywt6iaBxgzswEPcvIN5wpqlW7SIQ0Cz0u5Gy0qQ-oK2_fjTpmlWkUGxgZqfHzby8sfu-I3l7q4eB1bTFm0Nb290C441fpHso2OUa8Bzf2xvwexrSkgRurrWaWN7JQl7p_9Fh5Q4MbuygQ-xIZP7Ub_E5jRqwzdAQBdNg2nessVVOlMZ8U9ABmz_fZ-euzybUPFdEUaT-moWf05PVEdV8yF8oJAwiGZyuaw1c99GPjzgfENeoVy3llcD89YHwDkO50qO9oxhltA_M7iQ9Wy_Nq5qipk2uG0ZdgId1h-BhBhrzDuC2M4FlwHdcVTQ8OrV31BcebisFORFIGfUTXXXggOjK9E7oubeSGLHb8enx_jYOr8GfHjKBdlQ5Jxi-5Co8_PfvjgdELv8qMTnPT9v7r61KPN7U=w310-h901');
img[6] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBcoSs_J4BVHyQjadx9Byi6j55VP9Hlp9o8sQ0bBeuJdPRFLApX9k9hzn2g3fLhjtUwqWyxOMF5ly-bm2Uq6CRARo9_mH2_ItSX59lXLpOiWuomSTDw9ZfUFychBuEjqv4xINkKCDZOGezOdPKioGSCIkZacfd8ojwAY4DMw8Ksxh01gJGYrxL9QMHAhkiiiUHNGz3LTb_XqUHdHEYionpcu25LDZhv46gFP5xyLNveZJOkmeWeMxWVY7ZeY4yOE3tIkE4RLM84hN22PgMPvAn0dC_r3CBnRK1AAf-_zRExSPGpspIUDri6iBU7oGYQXlA29eqKrPJXSU0erG5yhGcTg2dAUsVlI0i7uuAHh8B2a14WzpUkkXRPrBpZ-praeitLHxbcio8D0Ri2h9YNdOZFG0URJDslwsOdCADOwfFOlu050Ov_EkwMT8mjvFmAf9a5VLYjT7AAynSJGRJIkOJXRqnEXVIcrLp-bxarCx0wXndIVrKDf6Mbg52Lx3mqEjnPOgoxM5qnWLUyERq_J0HzaiDgC7GtkAEjewonJYYdYUluHcuhD2dkWRf8k-JElYfd1COR_ZvNma_oNlzEds9b8OyX3F9TxK9teqiYiGC8cpc2m0KqasFaAEXLZuMiRhjj_en6CCPTcADz2N2kq3fk29xHb4MZu08D044BVYDX44224ydXLSGt0IHmo_nqtpFGCfaCyLccssU5y4enYyOfln6jTlnM25uAnDMcne3mbniCKKKaTUz-wDt1e9TgIKWzCOZivbAHKBUcOBrOrC4ojoqsRH7LV7i87YbSFyEZWI7dPDGjF5AkwI49vHg3re40IVB4z6N7r9Z5b_cRHgh0cOBqUokDgYC7o672IGDg5uM2LegNebLZuWNNaDCvCS_NA-gjhG3Rl-66-2I1In28NTav0f0oNo74A4aBKIPlf549SPBWMVuS9H1HV1xQoTBC1A9L9QFwmZENOB9IETTHay7PFAppsVk43Bch68frg9rNG6DWJUtd7qkU6c8zDFK1xtg9RX3Cl5ARlWl9qmyiEL1MkDsZsCZ_uK78Yp4KF886z0ags4_jm3H3-f7AB-YisMgRP-eW2VyRBR_N_snRjPt4CKnGxWZK2oi_72iyVlb1c9PHjcxWkBfIOreL_QL3LrQGHiH9J2PGkSRBXjwn70UwBxTpau0_9IXHCY0Eg0RlKNojuA_zDRjlSa-7UfAPtR-qBsWOPFY_D5THqIPt60l0c1WsOq0Z1SP9vGpxMJcqOWHDoI-s1l3tVehERs_juxpo2lu4vAS2TzEBAm0aY5kimSJSBw7vg37mquIlrWhpG28AGZ3YIbm1UK7kwilTQqc7aEgyCeOSa7piT3HwWky1kXPSLtdOawSWk_IjiwNO0tyVBT08FvcUAfnxTGDt09kGepQFXFhJz3quHMUEV4wb0gL_7s-NWt8ZVO3lAfXthcK02svFUk3hNARQrOXMul8fTLsrrqEqHIK4ZDF4-Zy8L5OvkScA7rKonQlh7e2zog3mZSXV7ZL4DbXpLd1e6DBw6LdcTH1q8-vCGHSISEiWcR4=w310-h901');
img[7] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBbDTubsE9zAZZSFYPO8qD7_v9sNvKr4IpTncNT27Y6HzNkfREnMKcBzFVUxrzK3j1kR7Z0yj2cRkgAZhmzIOUKwHLiwPjCiVCl1eiCsrBsYbtXM1ibqel2XX1mydKThYTFvTVUe7dvd7IYQxXXoAbFe0tjyg2Bvi4aCaaUcUmLII4RV5UK_VMMDeYP6_kghGbw28e8mzChFxv1s8ydJGJLmMPEBdDsFo5IIR-3mAkuP-sarr6SxEGmgT_aauHuiPqbj2wC9EuLGEwlhSbU0B4dkVFLgdPObx75gEcifq090DJavIvCcnQerdRpLY7K45-IgWTay5ZCyMzCadVHjFkbRvP2n5A2jXpPDYlubwOHUKZo8SZ3MpKpi2q_pMQGuTEkfmhMRvzxlKyvXJ4fl_cdVsx1_sbyhh-BEyUZ_3BHLBct9qtznEQl4ovHD3cBtf5N9Ek4TVLLKcDtQ5GtLAprktzuLDHU1hBAzV-cIznYkg2fPCJmI8KT1X3SG7o3HUQx3txVJ-nOtC6-F0yia8iNHMO9lnGEyPmXtY33gCkIWLi4Pss03f_MvMnZt3tpy5ijEbczHlcpVa0m8DX4BYJZ7vAntsAu-4amYykL03_FhPE0ZwYwaldoAAOApPU4mIbBK3QZmLZckxNVv6DAeCnFEVcxy_2BlTJh_0HPiAZVwmj7H4ccGgd9BcLnprXiFL25-lJsHF2OeRXQtx8y0MWYCdm6R2CoxfVXyVZKTiydMTcjdLYeA_wlc2_75uqUjuFL9F6bOUUh_nmj4fsnUMSyf80QfcC4LFsqk_N_Y5CBCb_U8fLtILiOsa1eVlgJQiYgFartqp2inmXqyPHMJMJh8M3Ux5zS7PnfY5KHIWzOChJ8ZOXROMyrMzdwb02I_1CJ8aqqfw_FExJ7U4kfo8xZKKHV_BWK-DKP4a-mMtrMT_T8ksWomzgQvPMxR9uYyXPGFJUAUR_Pf7RK7bH-Z2cnVkPMioolpWTvGcFcnuoAXf9Pd8qhkvJu4N2JirDfZiFX70fj33wFScnSNGSC2REjERJ22X4qU5DI0OPlcj9qOpexNI3FmyWaK0FqrcOqKNZK2j8CO4KzIWhR6978c3n8VliOpGPUzVcYFNVLoHbETbH-H-XjgQUgC9vVnE9m8UHuQTVHFizBqbyJM4gb78lTY3vHONnDlVzifGsvEflSX6pGPxGYwpctIy7KiBm5Ruj854WuCCuYpKPEqnMhs2NStLLsiFOTokaDsjZqi2L1-bM1POWEdAjVlZwqnBzVshZcsh-xC7VII5_T34vzUcGVZN1eiIPBo7WdsXnwhlmx_n7gZyi3rTxHh1yktZHYKImrVgVRYwq0Gx7f4Uf30yq0X6oisXwtfpvMQzMCUENHnlRnQOQ_LEY5KARXWqCFsCW21pYMDyhWdzHXqpjiCTiqO68Nlesxvs51n10qlyBTelJA57qc_ydqXhKWm1vNWbJArwm-dM___vxG8Zi_Bxi-ANIeEkGjVXjTjY8WFt33MJsS6EZH9nUtT8cyiMcPRFTFd3yFrACEV8EEja7aZeMN2Cd3o6s=w310-h901');
img[8] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypDyyK4j6YXa3L4wAp3OZnVQwgJDwRNLvS1Yv7r6qlYq6fNHV50Tz7XwVpjmiqb3i_oTDLnMUy4DnYVMvoAl0SQulH5mPmAXX7gDia4K-9NRWJs7M9QEiBR02QA0k-St-FtL_heKJ4bOluQ7tso_5PZKhdpaRAj9jL-VSjKvAR595Fv7U8J8uWo1rBT_GnSNH7D23DcCaeBjQqqnxzEaqEqB_Sz0nxp2FX4dbjzMKH1fg_ZCCRvHRA6_0T-YE0SiJ-h4pWKcN7S5AVzC8JjRtAkJ7T40ZHgroBr8YYAejYE0mb8odaUIWcS2lc21f3l9vFRFgCGHwbz5t8p-ky88o01TJaRDUmIQiC5WSJZbwj7KTAtGa-S7Tf6WL_CTQGWGmS7e19YdE25_No4NFEbDBZeJ3Y2YsOuYTPtNCVxokotjNFdYh4YacUHlfuxm3_Ao8CW5_nj3T_1Jf5obdvR5-nEZltd89Zb-ecsVFoGfRwJBtkA-VrIyVY6gmLLApGDxPFeGC7ATzbUtgbOWDNKe54pf8wkn9uiz_QaMcxzswjtfWmKzwJLMiP6mZh49ofvsYJOdkTD2w60QlfE9dEh5zs6fUrLchblr6zPNxTLbBYYHALM2B3iMa6R42jI7uSRVCuqWmR11523-dMF6pMoUkrhLUW1U-bZwCKOXF0-BW2mwvN-S0nmOfklNtrZBmml3gPSHBUcDedSdQF11az7kQTTs87TbMX9SlK9V3kGdcPDQFa6X2PnD-zbWst6jGYleN38Wd7Pu6QbCvCB7kVKKblSsmODqxSkDECNi0PdEaWnBeCw4bubsC6hNWKJ43ColuzVnP3GHsT_A38U4HAkWjHiu7dATZj6M9-P38VR7m82_4YWJqxmCQzQ3ZHGj8QfQcULEJIdYFRqyb-PRovfZAxWzCHt3Q2hnwQKlDhfjXQnku4B87kRKVmd7qNpWgC6VyvaakkDlKwdxkcW4fHWOJ-oP5olKL-bJWUtULW6kQqdZ90igXOhCSA2gGqx2pO4DeVvFbCp-BocNbyytod_60MkcaX81avzvHtOrsjsNlKTSkdHaoyYshfWBLn1Rz3wMvQnnUwlW7ziGBHghferIaTVNi7JHZb3MX-hJungkBS0HBo89H6v4I8cqUcHZcNufppDKaNIxuD5J3-E6oBAezrwuXbEE3ufm01gJhNJmtMFqht-RorgvhYHDHtxCyrPsTUDktixdUshPoWGdoQneUundlPs-sfvmqXieksvtXJOvhj_6iUF809yQMLn5-SvHtd50DmZRWVjEFdN-ZjLmwjAOJF578UuwiJwIoki8Kfu-631nKasiNBaOsmie1WNR-vk1EOTseh54PXvqvVlxYXlQv5FGzA1N4edwmEsc9KE-301EHN-K4J9Ex_-gcakECIHrXS_JNk4NfB2wn_TLYs2Uf-fSkO02TwRSv8n4O6MQ3zIkPCA5E9CorEPwPGC_D1kPOfaoYTZYxwooqVk0N35iQyUgqQ9RrOBbGC2z3uMbWTQIfq7rMdE89Xgk5lUA4-7Nw_ABpIxDIsFUCHjAYYRbOEmzrqs=w310-h901');
img[9] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypBpGasODCKjctXjo2WwwMFeF8i6TjKagdJqwssc6YXbfaqDmmaSuZFaPesGadF3EHgzvmu1A4P3Jt-4e1js-JPDOFX9oVNqbXfIj-tPKoaEvKCTftZnGUuIjVyT8xrl74nV3PxKQ6hCd2DIW3lN2G5QiSfs4VboXnnFY_lCNcrBa_oeOhXKd5Cb3A5nzLH2wCiZuBuB610a4JC1xcQvZnJODvPVLfwlSgHC0d9TTx8-jTp0MNMcgJoZBY7jSbF2smzgO3s58lFgLF4gBJwng9MdEIlDvgBQ0PNL4mg59W-nP6XkUItOmtP5kARC2CUVuKaEyiMX_c0Rip40axGZbSWEEl6UVlF-W-uie_-iR1OMGdTMZyfZyE0IrQulfdVHg-LYXvgVWfH-qs1EfjyZ6KwUMQsEtYKKEM3_UhaLBXJ7sM6MWyKwzZU8uUXPmRnip-5CQ0Gt4u5jvl4_vKjv9o2BW3qBA6dHW9JaJ979NRIYwJ3lXrCwiypwNgrx-ocgMainQBFIKfefsZGBZoHMiRwku1sedKAE1y5_8VWZYWpoVBO0wPnIRCNPsTJqM35-zudPjSE37oN4iLaczE9L2JHFBXWisaHNSl4fDNf7KMtHxIopBukQwJ7vpYL5S8u9yEjKoC9JBlue8yBDcvGOcWfDWCIhQ54EY-owkOm0kX1qK4JqM3LJMjIO3qnaddf0-vG_xmwZnZhzFbtfK6QO8VPzqRoepi81LGie69R_D6GanZOyeX5I1M7W17vaDvM82XWghuzn_qtwM_OApGG7zSuTx-xSVb3Zb5-iKKEXA-JqUiuxZFMgCvLGvPCX1Br4yhW5zzCIPbLhRPHEEEeqlgl-_ZciXEtaBQ5dgfo0tnYhdtkhOXQBxrbNHUNqyIxb63DKdLX7iEmiG6tu-8H2YQpgvMCHfeorg4OcHpCVJWDJxsqoJSW76RaQw9ZDp3DSqYzxdKbe9U-Ys1MU3XWKoyjFA0tg5M6XBOWV9QcDc1A9g6hs4w1bfYV4KcQu7ngRtSnDVazHnv8e2lXdATkGQf5yPfrjuz-CZFG0QMAw1VJJlK7vB-Pa8zpIWKno4CSbdkykcmTwXOFXi2QGCzZ-dL0JrnyT-PFPM-8GHs5IvD2tgcxaZArQZyuLDO9rcbDs55Io8ivRH9kcQsbR97giox2NqMNgOzQDM0vPlMp1K153SLEWRjhRCjBaJb8jlroLH1rJZG6k--nCsBRvwc6Sn-KhuCLWMScBGPajTy6KxXKQw__1-B1Hb7Ict3w0vHbcLhzoQa_BemTvf95qDD-hL8O8n-42Uv98T8XuEbaTd3QCtgWNqV8681VafLDei2XH0_zDu0yGJkoqH5ISvxMB7-DKTMd42E32lmvKfoBYL4IetaQ1-0_AgwWSq-qwLvpTZ9cKiwHlebgTaTzj5ITj1ssF-PAsS_GRXq_5HKw3NWVgwZ_du-Jtxw5cnyQXcwpQcXtTH74qaYKF74WZlk9xx0WHu7lYtbRgCDzzkcDpy5JI8MUNsjusYhww1WGrS14sl7dWcdi2snyr7dyrPiQwenO3RYhpH4w=w310-h901');
}

class IMG {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.r = random(40,80);
    this.originalX = x;
    this.originalY= y;
   // this.color = Math.floor(Math.random()*360);
    this.density = Math.random()*30;
  }
  draw() {
    fill(this.color, 100, 50);
    const randomValue = img[Math.floor(Math.random() * img.length)];
    image(randomValue, this.x, this.y, this.r, this.r);
  }

  update() {
    let distanceFromMouse = Math.sqrt((Math.pow(this.x-mouseX, 2)) + Math.pow(this.y-mouseY, 2));
    let distanceToOrigin = Math.sqrt((Math.pow(this.originalX-this.x, 2)) + Math.pow(this.originalY-this.y, 2));


    if (distanceFromMouse < inpactRange) {
      let repulsionAngle = Math.atan2(this.y - mouseY, this.x - mouseX);
      let repulsionForce = (inpactRange - distanceFromMouse) / inpactRange * this.density; // < 1
      this.x += Math.cos(repulsionAngle) * repulsionForce;
      this.y += Math.sin(repulsionAngle) * repulsionForce;
      // this.x -= Math.cos(repulsionAngle) * repulsionForce;
      // this.y -= Math.sin(repulsionAngle) * repulsionForce;
    } else {
      let attractionAngle = Math.atan2(this.originalY - this.y, this.originalX - this.x);
      let attractionForce = Math.abs(distanceToOrigin) / this.density;
      this.x += Math.cos(attractionAngle) * attractionForce;
      this.y += Math.sin(attractionAngle) * attractionForce;
    }
  }
}



function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  setup();
  draw();
}



function setup() {
  frameRate(5);
  colorMode(HSL)
    canvas = createCanvas(1000,800); // 이거 색 아예 검은색으로 
    var x = (windowWidth - width) / 5 * 4;
    var y = (windowHeight - height) / 5 * 4;
    canvas.position(x,y);
  noStroke();
  background(50);
  fill('#000');
  textSize(fontSize);
  textAlign(LEFT, TOP);
  textData = getTextData(message);
  dotCordinate = getCordinates();
  imgs = createParticles(scaleRate, 400, 300);
  

}


function draw() {
  background(0);
  updating();
  drawParticles();

}



function mouseDragged() {
}

function getTextData(message) {
  const data = [];
  text(message, 0, 0);    // draw once and get data
  for (let y = 0; y < textAscent(message); y++) {
    let row = [];
    for (let x = 0; x < textWidth(message); x++) {
      row.push(canvas.get(x, y))    // get data, [r, g, b, a]
    }
    data.push(row);
  }
  return data;
}

function getCordinates() {
  const cordinate = []
    for (let y = 0; y < textData.length; y++) {
    let row = []
      for (let x = 0; x < textData[0].length; x++) {
      let red = textData[y][x][0];    // the data equals [0, 0, 0, 255] or [255, 255,255, 255]. So pick up red value and judge
      if (red < 128) {    // if < 128, regard the pixel as 'black'(1);
        row.push(1);
      } else {
        row.push(0);
      }
    }
    dotsCordinate.push(row);
  }
  return cordinate
}

function createParticles(scaleRate, marginX, marginY) {
  const imgs = [];
  for (let y = 0; y < dotsCordinate.length; y+=5) {
    for (let x = 0; x < dotsCordinate[0].length; x+=5) {
      if (dotsCordinate[y][x] === 1) {
        let img = new IMG(x * scaleRate + marginX, y * scaleRate + marginY);
        imgs.push(img)
      }
    }
  }
  return imgs
}

function drawParticles() {
  imgs.forEach(p => {
    p.draw()
  }
  )
}

function updating() {
  imgs.forEach(p => {
    p.update();
  }
  )
}
