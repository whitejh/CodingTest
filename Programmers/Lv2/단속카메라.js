function solution(routes) {
  let camera = 1;
  let install_point = 0; // 카메라 설치 지점 및 차량이 가장 먼저 빠져나오는 지점

  routes.sort((a, b) => a[0] - b[0]); //먼저 진입한 기준으로 정렬
  // [[-18, -13], [-14, -5], [-5, -3], [-20, 15]]

  routes.forEach(([start, end]) => {
    if (install_point < start) {
      camera++;
      install_point = end;
    }
    else {
      if (install_point > end)
        install_point = end;
    }
  })

  return camera;
}

// 먼저 진입한 차량 순서대로 순회하면서 install_point보다 진입 지점이 빠르다면,
// install_point에 카메라 설치 시 해당 차량은 카메라를 만난 것이다.
// install_point보다 진입 지점이 나중이라면, 새로운 install_point를 생성해야한다.
// 카메라를 추가해야 하기 때문에 카메라 개수를 1 추가하고, install_point를 해당차량의 나간 지점으로 초기화해준다.

// [[-18, -13], [-14, -5], [-5, -3], [-20, 15]]
