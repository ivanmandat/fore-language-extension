# Работа с маской доступа: Fore

Работа с маской доступа: Fore
-


# Работа с маской доступа


Для раздачи прав доступа на объекты, настройки аудита и ведения истории
 в соответствующих свойствах и методах используется маска
 доступа. Данная маска формируется на основе значений перечисления
 [MetabaseObjectPredefinedRights](../Enums/MetabaseObjectPredefinedRights.htm).
 Если для объекта доступны специфические операции, то значение маски дополняется
 значениями одного из следующих перечислений:


	- [AuditLogSpecificRights](../Enums/AuditLogSpecificRights.htm)
	 - специфические операции, доступные для протокола доступа.


	- [CalculatedCubeSpecificRights](../Enums/CalculatedCubeSpecificRights.htm)
	 - специфические операции, доступные для вычисляемых кубов.


	- [CubeLoaderSpecificRights](../Enums/CubeLoaderSpecificRights.htm)
	 - специфические операции, доступные для загрузчика данных в куб.


	- [CubeSpecificRights](../Enums/CubeSpecificRights.htm)
	 - специфические операции, доступные для различных видов кубов.


	- [CustomObjectSpecificRights](../Enums/CustomObjectSpecificRights.htm)
	 - специфические операции, доступные для объектов пользовательских
	 классов.


	- [DataBaseSpecificRights](../Enums/DataBaseSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - База
	 данных.


	- [DictionarySpecificRights](../Enums/DictionarySpecificRights.htm)
	 - специфические операции, доступные для объектов репозитория - Справочник
	 НСИ и Составной справочник НСИ.


	- [MDCalcSpecificRights](../Enums/MDCalcSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Многомерный
	 расчет на сервере БД.


	- [ProblemSpecificRights](../Enums/ProblemSpecificRights.htm)
	 - специфические операции, доступные для объекта контейнера моделирования
	 - Задача моделирования.


	- [ProcedureSpecificRights](../Enums/ProcedureSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Процедура.


	- [ScenarioDimensionSpecificRights](../Enums/ScenarioDimensionSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Сценарий
	 моделирования.


	- [ScheduledTaskSpecificRights](../Enums/ScheduledTaskSpecificRights.htm)
	 - специфические операции, доступные для задач, создаваемых в контейнере
	 запланированных задач.


	- [SecuritySpecificRights](../Enums/SecuritySpecificRights.htm)
	 - специфические операции, доступные для политики безопасности.


	- [TableSpecificRights](../Enums/TableSpecificRights.htm)
	 - специфические операции, доступные для следующих объектов репозитория
	 - Таблица, Представление, Журнал, Присоединенная таблица.


	- [UpdateObjectSpecificRights](../Enums/UpdateObjectSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Обновление.


	- [ValidationSpecificRights](../Enums/ValidationSpecificRights.htm)
	 - специфические операции, доступные для объекта репозитория - Правило
	 валидации и Группа валидаций.


При раздаче прав, настройке аудита и истории сформировать значение маски
 из значений указанных перечислений не представляет трудности. Для составления
 комбинации операций необходимо использовать логическую операцию Or.


	Mask := MetabaseObjectPredefinedRights.Access Or MetabaseObjectPredefinedRights.Delete;


Если возникает обратная ситуация, когда по имеющейся маске, необходимо
 определить какие операции доступны, то необходимо писать собственную функцию
 для разбора значения маски.


## Пример 1


Рассмотрим пример разбора маски, возвращаемой методом [GetEffectiveRights](../Interface/ISecurityDescriptor/ISecurityDescriptor.GetEffectiveRights.htm).
 Значение маски является 4-x байтовым двоичным числом, приведённым в десятичную
 форму. Для разбора маски потребуется функция, осуществляющая обратное
 преобразование из десятичной формы в двоичную:


	Function DecToBin(Value: Double): String;

	Var

	    i, k: Integer;

	    Str, Str2: String;

	Begin

	    // Учитываем 32 бит маски,
	 при наличии которого значение будет отрицательное

	    If Value < 0 Then

	        Str := "1";

	        Value := (Value - Integer.MinValue) As Double;

	        k := 29 - (Math.Trunc(Math.Log(Value, 2), 0) As Integer);

	        For i := 0 To k Do

	            Str := Str + "0";

	        End For;

	    End If;

	    While Value > 1 Do

	        k := (Value - (2 * Math.Quotient(Value, 2))) As Integer;

	        Value := Math.Trunc(Value / 2, 0);

	        Str := Str + k.ToString;

	    End While;

	    Str := Str + Value.ToString;

	    For i := 0 To Str.Length - 1 Do

	        Str2 := Str2 + Str.SubString(Str.Length - i - 1, 1);

	    End For;

	    Return Str2;

	End Function DecToBin;


Данная функция возвращает двоичное число представленное в виде символьной
 строки.


Допустим, что в репозитории имеется объект с идентификатором «Obj_1».
 В менеджере безопасности платформы создан пользователь «TestUser».


Создадим форму и расположим на ней кнопку. Для кнопки создадим обработчик
 события «OnClick» и укажем следующий код:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    Subj: ISecuritySubject;

	    Rights: Integer;

	    BinRights: String;

	Begin

	    MB := MetabaseClass.Active;

	    //Субъект безопасности

	    Subj := MB.Security.ResolveName("TestUser");

	    //Объект, на который будут определены эффективные права для субъекта безопасности

	    MDesc := MB.ItemById("Obj_1");

	    SecDesc := MDesc.SecurityDescriptor;

	    //Получение эффективных прав в десятичном виде

	    Rights := SecDesc.GetEffectiveRights(Subj);

	    //Представление эффективных прав в двоичном виде

	    BinRights := DecToBin(Rights);

	End Sub Button1OnClick;


При нажатии на кнопку в переменной «Rights» будет содержаться значение,
 соответствующее эффективным правам пользователя на указанный объект, представленное
 в десятичном виде. В переменной «BinRights» будет это же значение, представленное
 в двоичном виде.


Допустим для объекта «Obj_1» доступны только основные и дополнительные
 операции и метод вернул следующее значение:


Rights := 114440 и BinRights := 11011111100001000. Каждый бит маски
 соответствует одной из операций. Если значение бита «0»,
 то операция для пользователя не определена (значение по операции не установлено,
 либо запрещено). Если значение бита «1»,
 то операция разрешена для пользователя.


Для сопоставления операций и битов в двоичной маске осуществим обратное
 преобразование к десятичному виду каждого бита в отдельности. Преобразование
 из двоичной формы в десятичную заключается в возведении числа 2 в степень,
 равную номеру бита. Нумерация битов начинается с 0, при этом двоичное
 число рассматривается справа налево.


В указанных перечислениях каждое значение, соответствующие какой-либо
 операции, также равно определенной степени числа 2 (MetabaseObjectPredefinedRights.All
 = 1 = 2^0; MetabaseObjectPredefinedRights.Print = 16384 = 2^14 и т.д.).
 Поэтому для проверки битов маски необходимо возвести число 2 в степень,
 равную номеру бита, и полученное значение сравнить со значениями в перечислениях.


Для сравнения значений со значениями перечислений реализуем следующую
 функцию:


	Public Function CheckRight(Right: Double): String;

	Begin

	    Select Case Right

	        //Основные права

	        Case MetabaseObjectPredefinedRights.All:

	            Return "All";

	        Case MetabaseObjectPredefinedRights.Read:

	            Return "Read";

	        Case MetabaseObjectPredefinedRights.Write:

	            Return "Write";

	        Case MetabaseObjectPredefinedRights.Access:

	            Return "Access";

	        Case MetabaseObjectPredefinedRights.Delete:

	            Return "Delete";

	        Case MetabaseObjectPredefinedRights.ReadDescr:

	            Return "ReadDescr";

	        Case MetabaseObjectPredefinedRights.WriteDescr:

	            Return "WriteDescr";

	        Case MetabaseObjectPredefinedRights.ReadPars:

	            Return "ReadPars";

	        Case MetabaseObjectPredefinedRights.WritePars:

	            Return "WritePars";

	        Case MetabaseObjectPredefinedRights.ReadBody:

	            Return "ReadBody";

	        Case MetabaseObjectPredefinedRights.WriteBody:

	            Return "WriteBody";

	        Case MetabaseObjectPredefinedRights.Create_:

	            Return "Create_";

	        //Дополнительные права

	        Case MetabaseObjectPredefinedRights.Print:

	            Return "Print";

	        Case MetabaseObjectPredefinedRights.ExportData:

	            Return "ExportData";

	        Case MetabaseObjectPredefinedRights.ImportData:

	            Return "ImportData";

	        Else

	            Return "Unknown
	 rights"

	    End Select;

	End Function CheckRight;


Данная функция по значению операции возвращает ее наименование. Если
 передаваемое значение отсутствует среди значений, используемых в перечислении,
 то функция вернет «Unknown rights».


Для проверки всех битов маски создадим дополнительную процедуру.


	Sub CheckBits(BinRights: String);

	Var

	    i: Integer;

	    TwoPower: Double;

	    c: Char;

	Begin

	    //Проверка битов двоичной маски

	    //Обратный цикл для просмотра строки справа налево

	    For i := BinRights.Length To 1 Step - 1 Do

	        //Т.к. индексация в символьной строке начинается с 0, то уменьшаем текущую позицию на 1

	        //Это необходимо для корректной работы свойства String.Chars

	        c := BinRights.Chars(i - 1);

	        //Нумерация битов осуществляется справа налево. Для получения номера бита вычитаем

	        //текущую позицию из общей длины.

	        //Получаем десятичное значение для соответствующего бита путем возведения 2 в степень,

	        //равную номеру бита.

	        TwoPower := Math.Power(2, BinRights.Length - i);

	        //Если значение текущего бита - 1, то операция доступна

	        //Если значение текущего бита - 0, то операция не определена, либо запрещена

	        If c = '1' Then

	            Debug.WriteLine("Доступная операция: " + CheckRight(TwoPower));

	        Else

	            Debug.WriteLine("Не определена/Запрещена операция: " + CheckRight(TwoPower));

	        End If;

	    End For;

	End Sub CheckBits;


В данной процедуре осуществляется просмотр всей маски справа налево.
 В консоль среды разработки будут выведена информация о доступных и неопределенных
 операциях.


Остается добавить вызов данной процедуры в обработчик нажатия кнопки:


	    //...

	    //Получение эффективных прав в десятичном виде

	    Rights := SecDesc.GetEffectiveRights(Subj);

	    //Представление эффективных прав в двоичном виде

	    BinRights := DecToBin(Rights);

	    CheckBits(BinRights);

	    //...


Для указанных выше значений маски (Rights := 114440 и BinRights :=
 11011111100001000) в консоль среды разработки будут выведены следующие
 значения:


Номер бита: 0 Не определена/Запрещена операция:
 All


Номер бита: 1 Не определена/Запрещена операция:
 Read


Номер бита: 2 Не определена/Запрещена операция:
 Write


Номер бита: 3 Доступная операция: Access


Номер бита: 4 Не определена/Запрещена операция:
 Delete


Номер бита: 5 Не определена/Запрещена операция:
 Unknown rights


Номер бита: 6 Не определена/Запрещена операция:
 Unknown rights


Номер бита: 7 Не определена/Запрещена операция:
 Unknown rights


Номер бита: 8 Доступная операция: ReadDescr


Номер бита: 9 Доступная операция: WriteDescr


Номер бита: 10 Доступная операция: ReadPars


Номер бита: 11 Доступная операция: WritePars


Номер бита: 12 Доступная операция: ReadBody


Номер бита: 13 Доступная операция: WriteBody


Номер бита: 14 Не определена/Запрещена операция:
 Print


Номер бита: 15 Доступная операция: ExportData


Номер бита: 16 Доступная операция: ImportData


Для 5-7 бита неизвестные значения, потому что они не используются в
 перечислении для задания операций.


Функцию «CheckRight» можно легко доработать для проверки специфических
 операций, в зависимости от класса объекта.


## Пример 2


Рассмотренный выше пример используется для проверки всех битов маски
 доступа. Если необходимо проверить наличие прав на какие-либо определенные
 операции, то можно использовать более простой способ. Так как маска является
 двоичным числом, то для проверки значений битов можно использовать логическую
 операцию And. Если результат будет
 отличен от нуля, значит в маске в соответствующем бите установлено значение
 «1», что соответствует наличию
 прав на операцию:


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    Subj: ISecuritySubject;

	    Rights: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    //Субъект безопасности

	    Subj := MB.Security.ResolveName("TestUser");

	    //Объект, на который будут определены эффективные права для субъекта безопасности

	    MDesc := MB.ItemById("Obj_1");

	    SecDesc := MDesc.SecurityDescriptor;

	    //Получение эффективных прав в десятичном виде

	    Rights := SecDesc.GetEffectiveRights(Subj);

	    //Проверка наличия прав на удаление объекта

	    If (Rights And MetabaseObjectPredefinedRights.Delete) <> 0 Then

	        Debug.WriteLine("Удаление разрешено");

	    Else

	        Debug.WriteLine("Удаление запрещено");

	    End If;

	End Sub UserProc;


См. также:


[Примеры](Examples_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
