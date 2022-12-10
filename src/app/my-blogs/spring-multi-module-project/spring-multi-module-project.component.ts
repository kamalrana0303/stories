import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-multi-module-project',
  templateUrl: './spring-multi-module-project.component.html',
  styleUrls: ['./spring-multi-module-project.component.scss']
})
export class SpringMultiModuleProjectComponent implements OnInit {
  jwkSet = {
    "keys": [
      {
        "kty": "RSA",
        "e": "AQAB",
        "kid": "a9b9e17a-646f-44aa-ace8-3576484287d5",
        "n": "0sIADn_5I6kSfO4EXjUDrsNYwUV9WnBsuR8jiW2FumvSQ1rwFhucrK4CZAA-suzIOTNlqe3na7GoTLBKwxcLM02mUZFZl2xtd1aPa_OWgR33IdUGWoiPQLK8mu_up3X3_DKuA0w0HtQB5y0oKMNgatM-C5EVQrh3N9G1VXH71VNDDcC18nj2GJp1AZjeO4bGm5cpZ034R1NUqq1oT-wI5GB9FIxrS0eUnNah0Z7IsNqVxtl9o1ZqbnY2d1W30R6eJTqop4UJYttWCUUCayt64XZk7b2pMgmAv8C1bEnd9yeHUh50IpVyMRdEN7Rt62-VGnasOwGZ3JVORJQDbGpv5Q"
      }
    ]
  }
  constructor() { }
  text = ''
  ngOnInit(): void {
  }

}
