# ICertSigner.Sign

ICertSigner.Sign
-


# ICertSigner.Sign


## Синтаксис


Sign(Code: String): String;


## Параметры


Code. Случайный блок данных,
 который необходимо подписать цифровой подписью.


## Описание


Метод Sign подписывает цифровой
 подписью указанный блок данных.


## Комментарии


Метод возвращает данные, подписанные цифровой подписью. В дальнейшем
 блок данных может быть проверен с помощью метода [ICertVerifier.Verify](../ICertVerifier/ICertVerifier.Verify.htm).


## Пример


Примеры использования приведены в описании методов [ICertProvider.OpenSigner](../ICertProvider/ICertProvider.OpenSigner.htm),
 [ICertProvider.OpenSignerBase64](../ICertProvider/ICertProvider.OpenSignerBase64.htm).


См. также:


[ICertSigner](ICertSigner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
