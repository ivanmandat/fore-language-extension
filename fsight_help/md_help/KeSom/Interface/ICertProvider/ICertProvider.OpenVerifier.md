# ICertProvider.OpenVerifier

ICertProvider.OpenVerifier
-


# ICertProvider.OpenVerifier


## Синтаксис


OpenVerifier(Name: String; Data: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm)):
 [ICertVerifier](../ICertVerifier/ICertVerifier.htm);


## Параметры


Name. Наименование контролера.


Data. Поток, связанный с сертификатом.


## Описание


Метод OpenVerifier возвращает
 контролер, осуществляющий проверку цифровой подписи с помощью сертификата,
 который передается в указанном потоке.


## Пример


Для выполнения примера в базе репозитория должен быть сохранен сертификат
 безопасности с идентификатором «sp».


			Function SampleVerifier(Code: String; Signature: String): Boolean;

Var

    MB: IMetabase;

    Cert: ICertificate;

    Package: ISecurityPackage;

    Provider: ICertProvider;

    MStream: IMemoryStream;

    Verifier: ICertVerifier;

    Result: Boolean;

Begin

    MB := MetabaseClass.Active;

    //Получение сертификата

    Cert := MB.Security.Policy.Certificates.FindById("sp");

    MStream := New MemoryStream.Create;

    //Загрузка данных сертификата в поток

    Cert.GetData(MStream);

    MStream.Position := 0;

    //Получение контролера

    Package := New StandardSecurityPackage.Create;

    Provider := Package.CertProvider;

    Verifier := Provider.OpenVerifier("sp", MStream);

    //Проверка цифровой подписи

    Result := Verifier.Verify(Code, Signature);

    Return Result;

End Function SampleVerifier;


Указанная функция предназначена для проверки цифровой подписи у блока
 данных. Случайный блок данных и блок, подписанный цифровой подписью, передаются
 в качестве входных параметров. Сертификат для проверки будет получен из
 базы репозитория и передан через поток. Результатом функции является логическое
 значение, указывающее соответствует ли цифровая подпись переданному случайному
 блоку данных.


См. также:


[ICertProvider](ICertProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
