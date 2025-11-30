# Область видимости: Fore

Область видимости: Fore
-


# Область видимости


Область видимости элемента кода определяет возможность его использования,
 то есть разрешение другому коду читать этот элемент и записывать в него
 данные. Область видимости определяется не только способом объявления элемента,
 но и уровнем доступа контейнера элемента. Для указания области видимости
 используются зарезервированные слова - модификаторы
 доступа. Ниже представлено сравнение, доступных в языке Fore,
 модификаторов доступа.


		 Модификатор доступа
		 Описание
		 Элементы, которые можно объявить с данным модификатором
		 Контекст объявления, в котором можно использовать модификатор


		 Public
		 Модификатор указывает на доступность элемента в любом месте
		 кода текущего модуля, во всех модулях сборки, а также в модулях,
		 для которых текущий модуль подключен по ссылке.
		 [классы](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [интерфейсы](Fore_Interfaces.htm), [делегаты](Fore_Deleg.htm),
		 [константы](../02_GeneralInfo/Fore_GenIng_Const.htm),
		 [переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm),
		 [процедуры и функции](Fore_Synt_ProcAndFunc.htm), [свойства](Description_Property.htm), [перечисления](Fore_Enums.htm),
		 [события](Fore_Deleg.htm)


		 [класс](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [пространство имен](Fore_Namespace.htm), [интерфейс](Fore_Interfaces.htm)


		 Private
		 Модификатор доступа указывает на доступность элемента только
		 в контексте его объявления. Данный модификатор позволяет полностью
		 скрыть детали внутренней реализации различных структур.
		 [классы](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [интерфейсы](Fore_Interfaces.htm), [делегаты](Fore_Deleg.htm),
		 [константы](../02_GeneralInfo/Fore_GenIng_Const.htm),
		 [переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm),
		 [процедуры и функции](Fore_Synt_ProcAndFunc.htm), [свойства](Description_Property.htm), [перечисления](Fore_Enums.htm),
		 [события](Fore_Deleg.htm)


		 [класс](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [пространство имен](Fore_Namespace.htm), [интерфейс](Fore_Interfaces.htm)


		 Protected
		 Модификатор доступа указывает на доступность элемента внутри
		 класса, а также во всех классах, производных от данного.
		 [константы](../02_GeneralInfo/Fore_GenIng_Const.htm),
		 [переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm),
		 [процедуры и функции](Fore_Synt_ProcAndFunc.htm), [свойства](Description_Property.htm), [события](Fore_Deleg.htm)


		 [класс](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [интерфейс](Fore_Interfaces.htm)


		 Friend
		 Модификатор доступа указывает на доступность элемента в любом
		 месте кода текущего модуля, а также во всех модулях текущей сборки.


Элементы с модификатором Friend
		 будут недоступны во внешних сборках.
		 [константы](../02_GeneralInfo/Fore_GenIng_Const.htm),
		 [переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm),
		 [процедуры и функции](Fore_Synt_ProcAndFunc.htm), [свойства](Description_Property.htm), [события](Fore_Deleg.htm)


		 [класс](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [интерфейс](Fore_Interfaces.htm)


		 Protected
		 Friend
		 Модификаторы доступа, используемые вместе, указывают, что к
		 элементам можно обратиться из любого модуля текущей сборки, а
		 также из класса, производного от данного, но находящегося в модуле
		 другой сборки.
		 [константы](../02_GeneralInfo/Fore_GenIng_Const.htm),
		 [переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm),
		 [процедуры и функции](Fore_Synt_ProcAndFunc.htm), [свойства](Description_Property.htm), [события](Fore_Deleg.htm)


		 [класс](../02_GeneralInfo/Fore_ClassesAndObjects.htm),
		 [интерфейс](Fore_Interfaces.htm)


## Пример


Для выполнения примера необходимо выполнить следующее:


	- Создать новую сборку.


	- В сборке создать новый модуль и форму.


	- На форме разместить компоненты Button
	 и EditBox с наименованиями
	 "Button1" и "EditBox1" соответственно. Для кнопки
	 создать обработчик события OnClick.


	- Добавьте ссылку на системную сборку Ui.


	- В модуле и обработчике события указать следующий код:


		- текст модуля:


	Class TestObject: Object

	    Private s: String;

	    //Свойство Name

	    Friend Property Name: String

	        Get

	        Begin

	            Return s;

	        End Get

	        Set

	        Begin

	            s := Value;

	        End Set

	    End Property Name;

	    //Проверка установленного наименования

	    Friend Function TestName: Integer;

	    Begin

	        If s = "" Then

	            Return - 1

	        Else

	            Return TestStructure;

	    End If;

	    End Function TestName;

	    //Функция для поиска в наименовании двойных символов

	    Protected Function TestStructure: Integer;

	    Var

	        i: Integer;

	    Begin

	        For i := 65 To 122 Do

	            If s.IndexOf(Char.Chr(i) + Char.Chr(i)) <> -1 Then

	                Break;

	            End If;

	        End For;

	        If i <> 123 Then

	            Return 0;

	        Else

	            Return 1;

	        End If;

	    End Function TestStructure;

	End Class TestObject;


		- событие OnClick:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Obj: TestObject;

	    i: Integer;

	Begin

	    Obj := New TestObject.Create;

	    Obj.Name := EditBox1.Text;

	    i := Obj.TestName;

	    If i = -1 Then

	        WinApplication.InformationBox("Наименование не установлено");

	    Elseif i = 0 Then

	        WinApplication.InformationBox("Наименование содержит дублирующиеся символы");

	    Elseif i = 1 Then

	        WinApplication.InformationBox("Наименование корректно");

	    End If;

	End Sub Button1OnClick;


После запуска формы при нажатии на кнопку будет создан новый объект
 пользовательского класса TestObject.
 Для объекта будет установлено свойство Name.
 Данное свойство реализовано в классе TestObject
 и доступно на чтение и запись в любом модуле текущей сборки. В качестве
 значения свойства Name будет установлен
 текст, введенный в компонент «EditBox1». Само значение наименования будет
 храниться в переменной «s». Переменная «s» доступна только в классе TestObject.


После установки будет осуществлена проверка наименования. Для проверки
 будет вызвана функция TestName,
 также доступная в любом модуле текущей сборки. Если установленное наименование
 не пустое, то из функции TestName
 будет вызвана дополнительная функция TestStructure.
 Функция TestStructure осуществляет
 проверку наименования на наличие дублирующихся символов английского языка.
 Данная функция будет доступна внутри класса TestObject,
 а также во всех классах, производных от него.


После проверки наименования будет выдано соответствующее сообщение о
 его корректности.


См. также:


[Руководство
 по языку Fore](../Fore_Title.htm) | [Процедуры и функции](Fore_Synt_ProcAndFunc.htm)
 | [Классы и объекты](../02_GeneralInfo/Fore_ClassesAndObjects.htm)
 | [Интерфейсы](Fore_Interfaces.htm) | [Перечисления](Fore_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
