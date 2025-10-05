import UIKit
import WebKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene,
               willConnectTo session: UISceneSession,
               options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }

        let webView = WKWebView(frame: .zero)
        let url = URL(string: "https://saikuto.netlify.app")!
        webView.load(URLRequest(url: url))

        let vc = UIViewController()
        vc.view = webView

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = vc
        window?.makeKeyAndVisible()
    }
}
