# ICertProvider.OpenSignerBase64

ICertProvider.OpenSignerBase64
-


# ICertProvider.OpenSignerBase64


## Синтаксис


OpenSignerBase64(Name: String; Data: String): [ICertSigner](../ICertSigner/ICertSigner.htm);


## Параметры


Name. Наименование подписчика.


Data. Содержимое закрытого
 ключа сертификата в формате Base64.


## Описание


Метод OpenSignerBase64 возвращает
 подписчик для сертификата, для которого передается закрытый ключ.


## Пример


			Function SampleSigner(Code: String; PrivateKey: String): String;

Var

    Package: ISecurityPackage;

    Provider: ICertProvider;

    Signer: ICertSigner;

    Signature: String;

Begin

    Package := New StandardSecurityPackage.Create;

    Provider := Package.CertProvider;

    //Сопоставление случайного значения блоку данных

    Provider.Code(Math.RandBetweenI(Integer.MinValue, Integer.MaxValue).ToString) := Code;

    //Получение подписчика

    Signer := Provider.OpenSignerBase64("sp", PrivateKey);

    //Подпись цифровой подписью

    Signature := Signer.Sign(Code);

    Return Signature;

End Function SampleSigner;


Указанная функция предназначена для подписи блока данных цифровой подписью.
 Блок данных и закрытый ключ передаются в качестве входных параметров.
 На выходе функция возвращает блок данных, подписанный цифровой подписью.


См. также:


[ICertProvider](ICertProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
