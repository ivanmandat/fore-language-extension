# IException.MessageID

IException.MessageID
-


# IException.MessageID


## Синтаксис


MessageID: Integer;


## Описание


Свойство MessageID возвращает
 цифровой идентификатор ошибки.


## Комментарии


При написании кода для обработки возможных исключительных ситуаций используется
 оператор [Try...End
 Try](Fore.chm::/10_Processing_Exceptions/processing_the_exceptions.htm) и ряд [системных
 классов исключительных ситуаций](fore.chm::/10_Processing_Exceptions/built_in_classes_of_the_exceptions.htm). Данные классы позволяют
 обработать базовые ошибки, которые могут возникнуть при работе как пользовательских,
 так и системных свойств/методов.


При определенных ситуациях (некорректные значения параметров, отсутствие
 прав доступа и т.п.) во время работы системных свойств/методов могут возникнуть
 специфические ошибки, генерируемые ядром платформы. Обработать такие ошибки
 можно используя базовый класс [Exception](../../Class/Exception/Exception.htm).
 Также для таких ошибок можно получить уникальное значение свойства MessageID.


Для базовых ошибок, а также для ошибок, которые генерируются не ядром
 платформы (например, генерируемые на уровне СУБД и прокидываемые на уровень
 ядра платформы), свойство MessageID
 возвращает значение «0».


## Пример


Для выполнения примера предполагается наличие в списке описаний репозиториев
 описания с идентификатором P5Test.


			Sub UserProc;

Var

    MAN: IMetabaseManager;

    SPackage: ISecurityPackage;

    Def: IMetabaseDefinition;

    Credential: ICredentials;

    MB: IMetabase;

Begin

    MAN := MetabaseManagerFactory.Active;

    SPackage := New StandardSecurityPackage.Create As ISecurityPackage;

    Credential := SPackage.CreateCredentials(AuthenticationMode.Password);

    Def := MAN.Definitions.FindById("P5Test");

    (Credential As IPasswordCredentials).UserName := "Abcdef";

    (Credential As IPasswordCredentials).Password := "IncorrectPassword";

    Try

        MB := Def.Open(Credential);

    Except On e: Exception Do

        Debug.WriteLine(e.Message);

        Debug.WriteLine(e.MessageId);

    Finally

    End Try;

End Sub UserProc;


При выполнении примера будет осуществлена попытка подключения к репозиторию,
 которому соответствует описание репозитория P5Test. Если в репозитории
 не создан пользователь с указанными учетными данными, то при подключении
 будет сгенерирована ошибка платформы - «Неверное имя пользователя/пароль».
 Для данной ошибки также существует уникальный идентификатор, возвращаемый
 свойством MessageID. При возникновении ошибки подключения соответствующее
 сообщение об ошибке и уникальный идентификатор ошибки будут выведены в
 консоль среды разработки.


См. также:


[IException](IException.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
