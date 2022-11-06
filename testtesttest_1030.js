const fontSize = 60, scaleRate = 6, message = '21', inpactRange = 150;
let canvas;
let textData = [];
let dotsCordinate = [];
let img = [];
let imgs = [];

function preload() {

    img[0] = 
    loadImage('https://lh3.googleusercontent.com/fife/AAbDypBtPkBo0i6xEqAYsdx0nk45A7YzLUlYeY3g9VBh29QeF-agTiU566iVbfh6ogYob_Em10fZqz8eh939-OFOatioYRI4vNHdDbe5Oq2ojHX9pAZY5-y7o8YNe56iGERYw1YJjPjfUnpSygqYoumcceZ4xreVA8eFN0hl9TWEAXzXFyPi0j2pRAj3evf3n-cpRQfNeEIswH0GaC-uZ461GVoipCHw4MtKyi1yhqe4ReX9xnbPo6Kl4jq7Zgt-z8_YjBzHZu0IOvWOb430WRemrMXlaaubGTI4amakBLgoP3JXA9wG0A5SdykWAQGZw825AKLrOiENpZ6173HRfmR6una7P_bvl4RsDg_e5EUz9SoVyFVUbf_dIJlVXg8t9LYdmBT-pWuebeTDe1J9V_IejEVavsZ3yeos8TKj44I4PsCeXvaxxDqyOkR_pSNJJIhCKQqJ_VUIjvFBtbEIXdVftFQimPWowNFrlCuPt7igNQsdC5Mj4epzs9F73XWmExhz5ZnbSK7C7uy_FB_u6zH0dRmNocI7xWD64d0T8zM0BLY6uLHide9DRL7hmopccxZkWB6WXymN4wFbviYrSzQPqBLXS9zLt1HKsDss7H_gG4rmbllWOpnSy0JHrKL7fGcExb1qc7BojX_GJ4sRxagBD9fKopraYQQeB6HEafWu6KL36BOK7tXt919RHo06Of_e6-zuRKMW-pj52dQi05PR7Rchvpb8WJjBEFjtclY0_CJ2iBtLyexBIjoOSfW2JG64pguwVT3aLIpvD1BgQffZUGWJ1UKP6ILFQ5UbDddo0K4qvdcW-9fCMuko5tWdpgvXXVLvi4A0E6cDafQDhYlLGY-_jQhZOzzP6vxK-nMLyhCtHvq77brkkyhJ_6828xFfougewivyrx-i1ChZDYKWhB87lke7lhjbZ3AKFQTcZDijKxQa9opzAVk29PbEwqGVlJN_d1FGtC2HWgZtsIMCNgwITLbuEpnIJ9bMgpXTtxpF1xS0YwyyTZ-QRCjIELvxau6AGtLfjDaqDePZXdCbVTyPTZtLkRq63XgeamxLsKD2Q4TTSlURlGIc2cgTgfS1KhlYEy2cr3k4MkDYFOVu7LBRMNLdZNFMW9vGqPU3yWC-FSyKG8zIDIhz3vhmE6GmqTWRtLSI_1lqoHATEUw5LNuwdp1k1Lems-ORQWsz-odorHAhiiPSDEO09kM0AX_ny8a1L_eA6TeicHliUsTdz4wNhKjJN-6jQW1XrJ30dyf_DZ0GX1HbLvXNNCyDGSNSjfPL171vxlSWgn4XG7L8un3VRgmRQskRKrRS04gJp8L8q4IyYkP56spOe__RyoC5vPSPfd89pMGCM5EyoFacHX-ghfa2FRdrmfhQ-XwTy26lwYA7lFhM4DC2UMU8IBO5Or5UsfiApRg52mFAxykUEfnoqzzVRNMnuRe3RMW4ANQ-uivfe8iGJeIopKzrO7dk0isMpTz0gc4VwACF0hcF6r6EGup3DmFBzdNtppaywjvTlcotjdN7iQXXocM=w1470-h907');
    img[1] =
    loadImage('https://lh3.googleusercontent.com/fife/AAbDypDRiKCgjoeNfBEm3Of9IMUpQAdqPDmMUaaO71Yca-9NQKGSJ_iO3PurrAKRcFqiXBzMN5SA9BTnBwNN1j_qQde95LI1Mbi9TNNlNCtqBK8Zt3BZira1zdlxgxNEYZ2c27WQMIEta0MA043n1PB9m83zcelRFmtcL6WghzwCXKyL1Y-CKTopfzXfAn5o-KkRe70tYsn_MawjcOG0q46yGhA29rNEbwEMeaS4lsAvU1Ak1DJHNYncqFP2dmGxA8wPaDZRFZG2aU2v0Wm3-55nvIZ40CSDJHJ3kB10_AWpeE9-sHmZ5zC-JsvNq178BRKrBXanevoa4qAlRhdomh7_KMm_qk6HFJvwd8hEutvJ4c_7YR4i-ExYbJjTZcqiuszBPt8llaR_9h5s1akTm0RkFY_KnRux3iod1FXQOx7RY_zbn4UBj8qzbRQExuTnNnvnR4SPDD2W53JUs64rpKdoJa2tLF8Q0puev9_o59quFxXpdqAXzHq3ihBu_fXTvDtHgKQqGEM_nSunF5K728aSuGdxcW1u77lB4Uyncr9YdpNdqXXcn9emafuJ90RsSOQonZNyIYWqjZwkKaES336Hy3CrIR1AfpLS2wpQzewKdMh9oTYuAjhFjt26IYQNg8f1qhJhdn5XMBjeiuymv01WQirahktfiEDrLzRO_1swIyVaPVrowS2lfwuCCY2jChI2NlSal_mRh5JQpprY2DbQXbjluLJYNITeSRgmXmDXKc4iyfvV9yNeOfvsK_9Hyrx-_rGAHhnOvPaBRr4k1nheMbz88zr7QfZEwUZS1iX1tyDYe3nW66viaI3yKA-28xzwGAQMWB32UZnlqgBT7Q9ncCdY24pOauDCjnScrs5poAp2sMTZrHtq2sVeb5BFr_lblV1QshgYk1De9nLB682graDShZPDaiQtemxe8RMFZ2DSqEI4dOiyvMUXJgCIAh7CA74xpzgJkSrfQrTUy0E0C7wvMrB6hULl8bCJybG7e2Eenk0w0YXqW4Jev9-hpikR7UOGVYIFDFTygD4jYEfNbO6pK6vFUPv8KJZ0V_ECbJPwTkJQ76Ogsk-RGJoacRAaKYgSHcaroL8eb817WSaYmq6avshFcXbeVSIMDYLm38LkGae9yzK3CKawKlxWCwKTffMZxN3ZEyJhgakJsMv_SJ8LvtwmRB0KahdKQvZqqkEoGnJXIfzAHW0gmYsVh--OlI3CkXkvCBpuHQn9utlm7_jTeBbznGQkFmGV4aYz0VGTz-vj-Ly-qGiNsluxzU_Y3DETkKRiQ053sDhPNHUOQDxbp-YUscT5VmAU2dWSubiIJlI0zMAPXNFuidMMXYufx3T6CrKbOHhMbQBVP8iYXL5wCi4DindC37-VzDHeU2EVE7kI6vQey07OALjB4L_oIh4pvhuCegk0NMMOpM0EyKJvEF6f0lVEC_dZlOtvQERnqbDuJAuzPsERpJOkLPu0-5L0yhT-CSvYkwn98e561eDD0TFDt4dkALNHV_g0qIWyfW6adrbEFkR8hew=w1470-h907');
  
  img[2] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypCvnrpcVbULabctN7vfsV7Eq7hQkMamlG2dDQyZaQzSdaYCSLlTVmKpiiA2F-2YyeUauOwZxwqsi7xpvk2TisMMckeNZi0e_MSff2acJh_Xcl3qenrmwRPoW-PfIwmSPAM3qJj_KeNzdXTDQkAVY2vwdjw9KDQQ9jE4fbDHIFU8VpU-ON3vSkrQ2IcxF4CSzhJp5XeAg4XCHzanvgV4begn32lw8RW7iawUvqwrhyuJWOisNU4LI83K05Y5PvYO_sWwSzq0cgHWVPe7B_k-84i7Ea9zcpLocQ5_-etjIae9nlx3D4DH9VZMgWecibZg5TtXGgABse1ZyKveqWYhBX7BfCLmaB4jYqFsl3pndIdy711RKeSOagcatLZ1P4oCAErJih5tSLt89whvvxJ2oESLwddLmoNCkyu4zozpPRMEVJre3_BDPUbeFK0W7wck2JlHtl_TFLU_TlVvTm9U3Ek83WduNsfM1_--Awh9zCuw9sNymZp0kpZBS1s25WQ1R8IAAHVFh9mFtkmp_ygHlUnpK158CfFOxhB2n7rXR8szl6MC5Lep21MNKHVIfFmIWGd_LhOSkCbTMAU4MOos_IxYqM2JozeBOZd0bC37bbow0UnWk-S5VxoMIyWUn3E6mykuJRmp2dfahvS7Mpf52eBxmiG1vNFlDQ8vulku8seKHGlA-2a-ySKxlEzGpt_urMZhbAkL0tP9ZtoEMjc12NusIzBaO7K1C-tK8k6JOyihxIMoigHJgR6ffl3v3NUBK6OX6KkjmR8nnn5wTCv4tDTukm-RNuu9l63Kyf71KyBAlt_V_Ee_y-09ts7ECdcskQ3qATLxwmS5opXn-3ImE47f9M3mdUs0QM8zoWUfnh4F5K_IcfVux6l4Hymp6fQxRMZPJ8k39lzXXzHdb4hS0g9VqdZJZcJ9T43t7zTbtpudfiFw7Le4zWqBlwtmJQIZhQkF6PlapI34uSvFpsHIr2ehol3KW_xqeCRPIIWE_dw-ogXhCdEPON5ZIjpLZ8jo1ad4LFp2u1ZCobo0j0rxNMBDMLoXAV3vh2wvU4AriuwXow4yP3tx_70R0JI_ObFuwpjlQbMhd6QCgjUWLnRJCupH7K8gsh_bjmHBPw_Wkfx0Ji9aH79PKPEnxcTH9TydZGoQqjSoP_rOpt7R8UxfbMBq9FmgavimXrH3e47EUqovKy6gWvhCpHJNycnuYnmGLPLV6OQzFKe9XWsuSVxgpgcqd1Jqquc9t1lIV1nq3vxICMoeGS2THcOVprYnRx2F9gZXl5plq8CqpoHJh_I3jKmhpYsV0prnZ0oQoivZI4RbcVE6XN_C3oVAMhBx5dcPw7r8KMbR7aVadP0_JiXuODGvmGOs4cb33jOzqM1rNX8o2MSy5LvbOv1Cvf-iYUqz676sV1Q3fU196moi9gBdYyZOBWfKmKtL15X3UKmjPtOr5uJlPq9ORBAd3Zj5GYBoZF38Ux3tcXz7yKuZd3vV3H7xBD0su2Ugag8xoG4qNNK0u7W0yEgshVZDZcU=w1470-h907');

img[3] = loadImage('https://lh3.googleusercontent.com/fife/AAbDypC7iyJ2UvqqHG2n4Z2Ez9lRK3KN11ncpJWJTL9rX-tRnunYEZ21l337u68VKiKNZg3rxhCiYjxZVUelCzNt2vHA3wAC81R1EjQOjHZaBbDQObePQA7plObZJE1itZn_lWDN_Pk91Naz9QvcAifT8sj6kP4lF2OxqWmOhYMhFbibC6pLsiwBVkfwLz0XK5ZRehWzRAl2O0B4o_0yR-2THEvJWbPIYLXJwVCh63ImYAo4-87GQBCxQzLTkKGknmOPkPa8bTgURbQzfqHTyx27C9cmTg7fm13qgifyVSJbDEPDEH4m71uc3fo79VI8GPp3j03PTjpCdv0_01uStyDIvu5DAg41T8x-smBmnFP-3eWZmMho23_Ye2XfLvB96FQJBWXNx00sQ8faVaRgwEgb7D9H1a3BS_lF09cSZC61RjE3ofl4toTvZQd2nah8MkAOqqwxuApO-YH_tDVKpBHvwgLgfl2UVXsgJYyJGVMEpoRXvQ6wA7CW4HyZFtdDQVbEdgUxdxsHAZSrqUhSTwLjLQcV2LgJ74WNBkW-H1ET6XbjxtaVyOc3u3EzS2U6uQWw8u6WhUzQj-mCXZDnynGkTZdr2SVTx-QQcyOIvpAzTLoRG40v3IQpwCMe4CANKOj-QjRd2UUMgHT6h94_rcIj-9g8-N-24wGEUxgeKdt0gPoNaCrClDGKE1dwtTcClUeTZ1SM35MXoedanczZKCbZHl3gROHNRGhXf0l7wmXGRJVqHHwXUxsLHwby37gZRlcpL6cTHqgXWXUtuBTr8NO3L06ml2fH1r1tCqDZUf-wouDLpq_c41N3pkEbYKSqJk5LkO3zGf1pVAgxndg1Ooq5N64Izv3SZYEMtbRBG3nWV14lv7u1v7mFxIZO8jtvqglsgE0hntfNjuERt6-MsNkT7TIXL8-tTgojH3P_unjNAodrmcpWlFeq78tTBfphKyvNuXliSvtoRAt4U7dQ1a-JdXuXLyB55tBEBzDyCbogKZlWBwLARVSuVoHPGYKmP2iULATRTdFALPcxLnLENeeMbbIks_etI_oT3418wHoL8X2xO7muQ0J0NRwpcJk9eOoLNUhHRahcJDPPVOHMbO-0-YnapRYdwfLZ3-CwCZsV8Np0gvyOqNIXCmV1zKTFReKpkvOBchQbDtRciGKeeHMUeACcvOa7AIJh69EV1REPP4sdMqe8iTJNPkw0lcWINk8wzQkbYe64tYhaHUuskk-jf0YYDw9phWYknNw3-ddPcDmPl40qLrBpnpW_6HzXpbJkeg9WAur7XN4eyhT-rZrEeBzPHZg6AQUEQlk4vD18x1YuS03YQmC04pvDWwpjkA5T1wRdcNcc0xSgDAapM8IyDx3kBLu8BWCxpYgKaM_FXhkyDt5UvbKqbQ-DTy7eByph-8QQR_9rqnQ_Bj3wS-OQPCqSQfZ201P2-C2z-vZtE_uNl-EgnHdOH36ttGsKRxCQkKERSMXgo0Wpwg-jdwayTOshVoknBus0NU1K_s0nLT4BUXypNLftxG_kE_c=w1470-h907');
}

class IMG {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20,80);
    this.originalX = x;
    this.originalY= y;
    this.color = Math.floor(Math.random()*360);
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
    canvas = createCanvas(800, 800); // 이거 색 아예 검은색으로 
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x,y);
  noStroke();
  background(50);
  fill('#000');
  textSize(fontSize);
  textAlign(LEFT, TOP);
  textData = getTextData(message);
  dotCordinate = getCordinates();
  imgs = createParticles(scaleRate, 0, 0);
  

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
