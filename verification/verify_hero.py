from playwright.sync_api import sync_playwright

def verify_hero_image():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Wait for the server to be ready
        try:
            page.goto("http://localhost:5002")
            page.wait_for_load_state('networkidle')

            # Wait for the hero section to be visible
            hero_section = page.locator("#home")
            hero_section.wait_for(state='visible')

            # Take a screenshot of the hero section
            page.screenshot(path="/home/jules/verification/hero_verification.png")
            print("Screenshot taken successfully")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_hero_image()
