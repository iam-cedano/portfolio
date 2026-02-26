from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    try:
        # Retry logic for connection
        for i in range(5):
            try:
                page.goto("http://localhost:3002", timeout=5000)
                break
            except:
                print(f"Retrying connection... {i+1}")
                time.sleep(2)

        # Wait for content to load and verify "Web Developer"
        page.wait_for_selector("text=Web Developer")
        print("Verified Web Developer text presence")

        # Take a screenshot of the full page
        page.screenshot(path="final_verification.png", full_page=True)
        print("Screenshot taken: final_verification.png")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
