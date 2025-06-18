<?php
// 日本語のメールを正しく送るために設定
mb_language("Japanese");
mb_internal_encoding("UTF-8");

// POSTで受け取ったデータの取得
$name     = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$furigana = htmlspecialchars($_POST['furigana'], ENT_QUOTES, 'UTF-8');
$company  = htmlspecialchars($_POST['company'], ENT_QUOTES, 'UTF-8');
$phone    = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
$email    = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message  = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// メール送信先
$to = "info@delta455.co.jp";

// 件名
$subject = "【お問い合わせ】デルタ455サイトより";

// メール本文
$body = <<<EOM
株式会社デルタ455宛

ウェブサイトよりお問い合わせがありました。

【お名前】
{$name}

【ふりがな】
{$furigana}

【会社名】
{$company}

【電話番号】
{$phone}

【メールアドレス】
{$email}

【お問い合わせ内容】
{$message}

---
このメッセージはお問い合わせフォームより送信されました。
EOM;

// メールヘッダ
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";

// メール送信実行
$success = mb_send_mail($to, $subject, $body, $headers);

// レスポンスヘッダー設定
header('Content-Type: application/json');

// 成功/失敗に応じてJSONレスポンスを返す
if ($success) {
    echo json_encode(['status' => 'success']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error']);
}
?>