# ICertProvider

ICertProvider
-


# ICertProvider


Сборка: Metabase;


## Описание


Интерфейс ICertProvider содержит
 свойства и методы поставщика сертификатов.


## Иерархия наследования


ICertProvider


## Комментарии


Доступ к поставщику сертификатов предоставляет свойство [ISecurityPackage.CertProvider](../ISecurityPackage/ISecurityPackage.CertProvider.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Code](ICertProvider.Code.htm)
		 Свойство Code определяет
		 блок данных, которому будет сопоставлено указанное случайное значение.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [NewCode](ICertProvider.NewCode.htm)
		 Метод NewCode генерирует
		 пару «блок данных-случайное значение», которые в дальнейшем используются
		 для цифровой подписи.


		 ![](../../Sub_Image.gif)
		 [OpenSigner](ICertProvider.OpenSigner.htm)
		 Метод OpenSigner возвращает
		 подписчик для сертификата, закрытый ключ которого передается в
		 указанном потоке.


		 ![](../../Sub_Image.gif)
		 [OpenSignerBase64](ICertProvider.OpenSignerBase64.htm)
		 Метод OpenSignerBase64
		 возвращает подписчик для сертификата, для которого передается
		 закрытый ключ.


		 ![](../../Sub_Image.gif)
		 [OpenVerifier](ICertProvider.OpenVerifier.htm)
		 Метод OpenVerifier
		 возвращает контролер, осуществляющий проверку цифровой подписи
		 с помощью сертификата, который передается в указанном потоке.


		 ![](../../Sub_Image.gif)
		 [OpenVerifierBase64](ICertProvider.OpenVerifierBase64.htm)
		 Метод OpenSignerBase64
		 возвращает контролер, осуществляющий проверку цифровой подписи
		 с помощью передаваемого сертификата.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
