# ICertProvider.OpenSigner

ICertProvider.OpenSigner
-


# ICertProvider.OpenSigner


## Синтаксис


OpenSigner(Name: String; Data: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm)):
 [ICertSigner](../ICertSigner/ICertSigner.htm);


## Параметры


Name. Наименование подписчика.


Data. Поток, связанный с закрытым
 ключом сертификата.


## Описание


Метод OpenSigner возвращает
 подписчик для сертификата, закрытый ключ которого передается в указанном
 потоке.


## Пример


			Function SampleSigner(Code: String; PathKey: String): String;

Var

    Package: ISecurityPackage;

    Provider: ICertProvider;

    FStream: IFileStream;

    Signer: ICertSigner;

    Signature: String;

Begin

    Package := New StandardSecurityPackage.Create;

    Provider := Package.CertProvider;

    //Сопоставление случайного значения блоку данных

    Provider.Code(Math.RandBetweenI(Integer.MinValue, Integer.MaxValue).ToString) := Code;

    FStream := New FileStream.Create(PathKey, FileOpenMode.Read, FileShare.DenyNone);

    //Получение подписчика

    Signer := Provider.OpenSigner("sp", FStream);

    //Подпись цифровой подписью

    Signature := Signer.Sign(Code);

    Dispose FStream;

    Return Signature;

End Function SampleSigner;


Указанная функция предназначена для подписи блока данных цифровой подписью.
 Блок данных и путь до файла с закрытым ключом передаются в качестве входных
 параметров. На выходе функция возвращает блок данных, подписанный цифровой
 подписью.


См. также:


[ICertProvider](ICertProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
