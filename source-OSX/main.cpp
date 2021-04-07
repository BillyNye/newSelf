//
//  main.cpp
//  pnSelf
//
//  Created by Whalemart on 1/13/21.
//  Copyright © 2021 Bedo Negro. All rights reserved.
//

#include <iostream>

int main(int argc, const char * argv[]) {
    system("printf '\e[8;18;81t'");
    system("printf '\e[5t'");
    system("clear");
    std::cout << "Starting pnSelf...";
    system("cd ./pnSelf");
    system("./pnSelf/pnSelf-macos");
    return 0;
}
