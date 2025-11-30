# Работа с COM-объектами в Fore

Работа с COM-объектами в Fore
-


# Работа с COM-объектами в Fore


Стандарт COM был разработан компанией Microsoft и предназначен для создания
 программного обеспечения на основе взаимодействующих компонентов, каждый
 из которых может использоваться во многих программах одновременно. В языке
 Fore для создания и взаимодействия с COM-объектами используются методы
 класса [Variant](foresys.chm::/class/variant/variant.htm).


Для создания экземпляра COM-объекта необходимо вызвать метод [CreateObject](foresys.chm::/class/variant/variant.createobject.htm)
 с указанием программного идентификатора приложения. Если приложение уже
 запущено, то доступ к нему можно получить, используя метод [GetActiveObject](foresys.chm::/class/variant/variant.getactiveobject.htm):


	Var

	    NewInstance, ExistInstance: Variant;

	Begin

	    NewInstance := Variant.CreateObject(<ProgID>);

	    ExistInstance := Variant.GetActiveObject(<ProgID>);


Примечание.
 Программный идентификатор приложения может быть получен из реестра операционной
 системы, более подробно читайте в описании методов [CreateObject](foresys.chm::/class/variant/variant.createobject.htm),
 [GetActiveObject](foresys.chm::/class/variant/variant.getactiveobject.htm).


Взаимодействие с полученным экземпляром приложения осуществляется посредством
 методов [GetProperty](foresys.chm::/class/variant/variant.getproperty.htm),
 [GetPropertyEx](foresys.chm::/class/variant/variant.getpropertyex.htm),
 [SetProperty](foresys.chm::/class/variant/variant.setproperty.htm),
 [SetPropertyEx](foresys.chm::/class/variant/variant.setpropertyex.htm),
 [Invoke](foresys.chm::/class/variant/variant.invoke.htm).
 Для работы с полученным экземпляром COM-объекта необходимо предварительно
 изучить его API.


## Работа с COM-объектами на форме


В настольном приложении для работы с COM-объектами на прикладной форме
 в среде разработки предназначен компонент [OleDocumentBox](uidevenv.chm::/02_components_constructor_forms/02_additional_components/oledocumentbox.htm).
 Метод компонента [CreateObject](modforms.chm::/interface/ioledocumentbox/ioledocumentbox.createobject.htm)
 позволяет создать новый экземпляр COM-объекта, а метод [CreateFromFile](modforms.chm::/interface/ioledocumentbox/ioledocumentbox.createfromfile.htm)
 создаёт COM-объект в соответствии с типом указываемого файла, после чего
 загружает указанный файл.


Примечание.
 В «Форсайт. Аналитическая платформа»
 метод [CreateFromFile](modforms.chm::/interface/ioledocumentbox/ioledocumentbox.createfromfile.htm)
 поддерживается только для файлов Microsoft Excel и Microsoft Word.


Далее, используя свойство [OleObject](modforms.chm::/interface/ioledocumentbox/ioledocumentbox.oleobject.htm),
 можно работать с созданным экземпляром с помощью указанных выше методов
 типа данных Variant:


	Var

	    Obj: Variant;

	Begin

	    OleDocumentBox1.CreateObject(<ProgID>);

	    Obj := OleDocumentBox1.OleObject;


## Примеры взаимодействия с различными
 приложениями


В следующих подразделах приведены
 примеры взаимодействия с наиболее распространенными приложениями, а также
 варианты решения различных задач при работе с приложениями из Fore:


		 Примеры взаимодействия с приложениями


		 [Работа с Microsoft Excel](ExcelThroughCom.htm)


## Общие рекомендации по работе с COM-объектами из Fore


Если свойства/методы COM-объекта в исходном API используют какие-либо
 перечислимые типы, то для использования их из Fore необходимо будет указывать
 числовые значения, которые соответствуют соответствующим элементам перечислений.
 Для того чтобы формируемый на Fore код был читаемым и не был перегружен
 сплошными числами, рекомендуется объявить аналогичные перечисления и использовать
 их при задании/проверке значений свойств или выполнении методов.


Пример:


Имеется какой-либо COM-объект, для которого реализован метод «Run» со
 следующей сигнатурой:


Function Run(a: UserEnum1, b: UserEnum2): UserEnum3;


UserEnum1, UserEnum2, UserEnum3 - это перечислимые типы, объявленные
 в API COM-объекта. Для выполнения данного метода код на Fore может выглядеть
 следующим образом:


	Sub UserProc;

	Var

	    v, Res: Variant;

	Begin

	    v := Variant.CreateObject(<ProgID>);

	    Res := v.Invoke("Run", 3, 1);

	    Select Case (Res As Integer)

	        Case 1: //...

	         Case 2: //...

	     End Select;

	End Sub UserProc;


Без дополнительных комментариев сложно определить чему соответствуют
 значения «1,2,3» и что будет в результате выполнения метода, поэтому модифицируем
 код, определив перечисления UserEnum1, UserEnum2, UserEnum3 в Fore. Значения
 элементов перечислений должны соответствовать значениям в исходном API
 COM-объекта:


	Enum UserEnum1

	    a, b, c

	End Enum UserEnum1;

	Enum UserEnum2

	    a = 1, b = 2, c = 3

	End Enum UserEnum2;

	Enum UserEnum3

	    a = 1, b = 2, c = 4

	End Enum UserEnum3;


	Sub UserProc;

	Var

	    v, Res: Variant;

	Begin

	    v := Variant.CreateObject(<ProgID>);

	    Res := v.Invoke("Run", UserEnum2.c, UserEnum1.a);

	    Select Case (Res As UserEnum3)

	        Case UserEnum3.a: //...

	         Case UserEnum3.b: //...

	     End Select;

	End Sub UserProc;


См. также:


[Разработка
 прикладного приложения](../../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
