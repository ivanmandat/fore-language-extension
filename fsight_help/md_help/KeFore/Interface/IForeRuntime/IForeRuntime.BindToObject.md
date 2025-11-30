# IForeRuntime.BindToObject

IForeRuntime.BindToObject
-


# IForeRuntime.BindToObject


## Синтаксис


		BindToObject(RealObject: Object): [IForeObject](../IForeObject/IForeObject.htm);


## Параметры


RealObject. Экземпляр пользовательского
 класса.


## Описание


Метод BindToObject предоставляет
 доступ к экземпляру пользовательского класса.


## Комментарии


Метод не поддерживает работу с экземплярами системных классов, доступных
 в системных сборках среды разработки.


## Пример


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub ShowObject(Obj: Object);

		Var

		    Runtime: IForeRuntime;

		    ClassInst: IForeObject;

		    Field: IForeVar;

		    c, i: Integer;

		Begin

		    Runtime := (MetabaseClass.Active As IForeServices).GetRuntime;

		    //Получение экземпляра пользовательского
		 класса

		    ClassInst := Runtime.BindToObject(Obj);

		    //Просмотр значений полей

		    c := ClassInst.FieldsCount;

		    For i := 0 To c - 1 Do

		        Field := ClassInst.FieldItem(i);

		        Debug.WriteLine(Field.Name + " : " + Field.Value);

		    End For;

		End Sub ShowObject;


Указанная процедура позволяет получать информацию о значениях полей
 экземпляров пользовательских классов. Экземпляр класса передаётся в качестве
 входного параметра процедуры, значения полей выводятся в консоль среды
 разработки.


См. также:


[IForeRuntime](IForeRuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
