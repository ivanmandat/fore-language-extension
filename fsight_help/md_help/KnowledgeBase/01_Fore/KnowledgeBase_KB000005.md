# Порядок оформления кода

Порядок оформления кода
-


# Порядок оформления кода


	Номер статьи: KB000005


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


	Ниже приводится описание рекомендуемого порядка оформления исходного
	 кода прикладных систем в «Форсайт. Аналитическая платформа».
	 Стиль кодирования автоматически поддерживается редактором среды разработки
	 при включенной опции «[Использовать
	 автоформатирование кода](Developer.chm::/About_Developing/Development_Environment_Options.htm)» в настройках среды разработки.


### Принципы именования


		- Идентификаторы классов и интерфейсов, их полей и методов,
		 функций и их параметров, переменных и пользовательских типов,
		 констант перечислимых типов должны состоять из одного или более
		 слов английского языка и отражать функциональное назначение идентификатора;


		- Первые буквы слов, составляющих идентификатор, должны быть
		 прописными, остальные строчными; идентификаторы не должны содержать
		 символа подчеркивания. Примеры корректных идентификаторов: Cube,
		 CubeDimension, GoodCasedIdentifier;


		- При использовании в идентификаторах аббревиатур длиной в
		 2 символа должны использоваться прописные буквы, в противном случае
		 (аббревиатура из 3 букв и более) первая буква должна быть прописной,
		 а остальные строчными (UI, IO, Xml, Dom);


		- Допустимо использование сокращений в идентификаторах в следующих
		 случаях:


		-


			- Для сокращения длинных слов
			 языка (длиной более 7 букв);


			- Для именования локальных
			 переменных и параметров функций, приватных полей классов;


		- Допустимо использование однобуквенных идентификаторов для
		 именования локальных переменных. При этом буква должна быть заглавной.
		 Для именования переменных, являющихся счетчиками циклов, рекомендуется
		 использовать однобуквенные идентификаторы I, J, K и т.д.;


		- Должны использоваться следующие префиксы и суффиксы: префикс
		 «I» для имён интерфейсов, префикс «F» для имён полей классов,
		 суффикс Exception для имен классов исключительных ситуаций; использование
		 префиксов и суффиксов для других целей не допускается


		- При формировании идентификаторов методов и функций сначала
		 должно указываться действие, затем - прилагательные, и, наконец,
		 объекты. Например: CreateValidNamedObjects, а не ValidNamedObjectsCreate;
		 ShowModal, а не ModalShow. Присутствие прилагательных и объектов
		 в идентификаторах желательно, но необязательно.


### Форматирование кода


	Для форматирования кода должны использоваться символы табуляции
	 и пробела. Символ табуляции должен использоваться для оформления отступов,
	 а символ пробела - для разделения лексем в коде.


#### Отступы


	Отступы (в виде одного символа табуляции) должны использоваться
	 в следующих случаях:


		- В блоке описания переменных. Строки, непосредственно описывающие
		 переменные, должны располагаться под строкой с оператором Var и иметь отступ:


		Var

		    I: Integer;


		- В многострочных выражениях, в описаниях параметров процедур
		 и функций, не умещающихся в одну строку:


		Function Calculate(FirstParameter,

		    SecondParameter: Integer; Var ThirdParameter: Integer);


		ThirdParameter := FirstParameter +

		    SecondParameter * FirstParameter;


		- В описаниях процедур и функций. Код, расположенный между
		 операторами Begin и End, должен иметь отступ:


		Function ConvertValue(Value: Variant): Integer;

		Begin

		    Alfa := 1;

		End;


		- В описаниях классов и перечислимых типов:


		Class ConfirmForm: Form;

		    OkButton: Button;

		End Class;


		Enum Colors;

		    Red,

		    Green,

		    Blue

		End Enum Colors;


		- В операторе выбора. Во-первых, должен быть отступ перед
		 каждым вариантом выбора. Во-вторых, код, относящийся к каждому
		 варианту, должен начинаться в следующей строке, и иметь отступ
		 по отношению к строке с оператором Case/Else:


		Select Case Value

		    Case 0:

		        Alfa := 1;

		        Beta := 2;

		    Else

		        Gamma := 3;

		End Select;


		- В условном операторе:


		If Value = 0 Then

		    Alfa := 1;

		Else

		    Beta := 2;

		End If;


		- В операторах циклов:


		For I := 0 To Count - 1 Do

		    Alfa := 1;

		End For


		For Each V In List Do

		    Debug.WriteLine(V);

		End For;


		While I < Count Do

		    Alfa := 1;

		End While


		Repeat

		    Alfa := 1;

		    I := I + 1;

		Until I = Count;


		- В операторе обработки исключительных
		 ситуаций:


		Try

		    Alfa := 1;

		Except

		    Beta := 2;

		Finally

		    Gamma := 3;

		End Try;


	Во всех остальных случаях использование
	 отступов не допустимо.


#### Пробелы


	Пробелы должны использоваться для разделения лексем в исходном коде.
	 Несколько последовательно идущих пробелов между лексемами должны заменяться
	 одним.


	Пробелы должны использоваться для разделения лексем в следующих
	 случаях:


		- до и после ключевых слов языка;


		- до и после знака присваивания в операторе присваивания;


		- до и после знаков операций в выражениях;


		- после запятой в параметрах при описании и вызове функций
		 и в других перечислениях элементов;


		- после знака вопроса, а также до и после двоеточия в операции
		 выбора;


		- после двоеточия в описании переменных, свойств и параметров
		 функций.


	Пробелы не должны использоваться для разделения лексем в следующих
	 случаях:


		- перед точкой с запятой;


		- после открывающей и перед закрывающей круглыми скобками;


		- перед запятой в параметрах при описании и вызове функций
		 и в других перечислениях;


		- перед двоеточием в описаниях переменных, свойств и параметров
		 функций.


#### Пустые строки


	Пустая строка должна использоваться в следующих случаях:


		- для отделения деклараций классов и типов друг от друга;


		- для отделения реализаций методов и функций друг от друга.


#### Прочее


	Операторы, относящиеся к одной конструкции языка (Begin
	 – End, Repeat
	 – Until, Try
	 – Except – Finally
	 – End Try,
	 Select – End
	 Select, и др.) должны находиться в одной позиции в строке (в
	 одной колонке).


## Пример


		Enum WhatICanDo

		    GetSomeSleep,

		    BrowseInternet,

		    PlayFavouriteGame

		End Enum WhatICanDo;


		// Демонстрационный класс

		Class GOODFORMATForm: Form

		    PlayGame: Button;

		    CancelButton: Button;

		    BrowseInet: Button;

		    SomeSleep: Button;


		    Sub CancelButtonOnClick(Sender: Object);

		    Begin

		        Self.Close;

		    End Sub CancelButtonOnClick;


		    Sub Sleep(Millisecs: Integer);

		    Var

		        J, I: Integer;

		    Begin

		        I := (Millisecs + 999) Div 1000;

		        While I > 0 Do

		            For J := 0 To 999 Do

		                If Millisecs > 0 Then

		                    Millisecs := Millisecs - 1;

		                Else

		                    I := 0;

		                    Break;

		                End If;

		            End For;

		            I := I - 1;

		        End While;

		    End Sub Sleep;


		    Sub ShellExecute(Command: String);

		    Begin

		        Repeat

		            Command := Command + " ";

		        Until Command.Length > 100;

		    End Sub ShellExecute;


		    Function CreateProcess(ProcessName: String): Boolean;

		    Var

		        Result: Boolean;

		    Begin

		        Result := True;

		        Try

		            WinApplication.NotImplementedBox;

		            Raise New Exception.Create("Данная функция еще не реализована");

		        Except

		            Result := False;

		            WinApplication.InformationBox(

		                "Произошла ошибка выполнения в GOODFORMATForm.CreateProcess");

		        End Try;

		        Return Result;

		    End Function CreateProcess;


		    Sub HaveFun(Action: WhatICanDo);

		    Begin

		        Select Case Action

		            Case WhatICanDo.GetSomeSleep:

		                Sleep(60000 * 30);

		            Case WhatICanDo.BrowseInternet:

		                ShellExecute("http://www.favouritesite.com");

		            Case WhatICanDo.PlayFavouriteGame:

		                CreateProcess("C:\Quake3\Quake3.exe");

		            Else

		                WinApplication.InformationBox("Nothing to do!");

		        End Select;

		    End Sub HaveFun;


		    Sub PlayGameOnClick(Sender: Object);

		    Begin

		        HaveFun(WhatICanDo.PlayFavouriteGame);

		    End Sub PlayGameOnClick;


		    Sub BrowseInetOnClick(Sender: Object);

		    Begin

		        HaveFun(WhatICanDo.BrowseInternet);

		    End Sub BrowseInetOnClick;


		    Sub SomeSleepOnClick(Sender: Object);

		    Begin

		        HaveFun(WhatICanDo.GetSomeSleep);

		    End Sub SomeSleepOnClick;


		End Class GOODFORMATForm;


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
