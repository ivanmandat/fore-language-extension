# ICertVerifier.Verify

ICertVerifier.Verify
-


# ICertVerifier.Verify


## Синтаксис


Verify(Code: String; Signature: String): Boolean;


## Параметры


Code. Случайный блок данных.


Signature. Блок данных, подписанный
 цифровой подписью.


## Описание


Метод Verify осуществляет проверку
 цифровой подписи блока данных и на основании исходного блока данных.


## Комментарии


Метод возвращает значение True,
 если блок данных Signature - это
 блок данных Code, подписанный
 цифровой подписью. Подпись цифровой подписью осуществляет метод [ICertSigner.Sign](../ICertSigner/ICertSigner.Sign.htm).


## Пример


Примеры использования приведены в описании методов [ICertProvider.OpenVerifier](../ICertProvider/ICertProvider.OpenVerifier.htm),
 [ICertProvider.OpenVerifierBase64](../ICertProvider/ICertProvider.OpenVerifierBase64.htm).


См. также:


[ICertVerifier](ICertVerifier.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
