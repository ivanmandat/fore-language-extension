# ICertProvider.OpenVerifierBase64

ICertProvider.OpenVerifierBase64
-


# ICertProvider.OpenVerifierBase64


## Синтаксис


OpenVerifierBase64(Name: String; Data: String):
 [ICertVerifier](../ICertVerifier/ICertVerifier.htm);


## Параметры


Name. Наименование контролера.


Data. Сертификат в формате
 Base64.


## Описание


Метод OpenSignerBase64 возвращает
 контролер, осуществляющий проверку цифровой подписи с помощью передаваемого
 сертификата.


## Пример


Для выполнения примера в базе репозитория должен быть сохранен сертификат
 безопасности с идентификатором «sp».


			Function SampleVerifier(Code: String; Signature: String): Boolean;

Var

    MB: IMetabase;

    Cert: ICertificate;

    Package: ISecurityPackage;

    Provider: ICertProvider;

    Verifier: ICertVerifier;

    Result: Boolean;

Begin

    MB := MetabaseClass.Active;

    //Получение сертификата

    Cert := MB.Security.Policy.Certificates.FindById("sp");

    //Получение контролера

    Package := New StandardSecurityPackage.Create;

    Provider := Package.CertProvider;

    Verifier := Provider.OpenVerifierBase64("sp", Cert.Data);

    //Проверка цифровой подписи

    Result := Verifier.Verify(Code, Signature);

    Return Result;

End Function SampleVerifier;


Указанная функция предназначена для проверки цифровой подписи у блока
 данных. Случайный блок данных и блок, подписанный цифровой подписью, передаются
 в качестве входных параметров. Сертификат для проверки будет получен из
 базы репозитория и передан в виде строки. Результатом функции является
 логическое значение, указывающее соответствует ли цифровая подпись переданному
 случайному блоку данных.


См. также:


[ICertProvider](ICertProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
