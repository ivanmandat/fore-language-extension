# IMetabaseUpdateUserEvents.OnAskConstraintsHandling

IMetabaseUpdateUserEvents.OnAskConstraintsHandling
-


# IMetabaseUpdateUserEvents.OnAskConstraintsHandling


## Синтаксис


OnAskConstraintsHandling(


Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm);


Node: [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);


Details: String;


Var Handling: [UpdateDataConstraintsHandlingType](../../Enums/UpdateDataConstraintsHandlingType.htm));


## Параметры


Update. Обновление, применяемое
 к текущему репозиторию.


Node. Объект обновления, для
 которого сгенерировано событие.


Details. Информация об ошибке.


Handling. Переменная, определяющая
 способ обработки ограничения целостности.


## Описание


Метод OnAskConstraintsHandling
 реализует событие, возникающее при необходимости обработать ограничение
 целостности данных обновляемого объекта.


## Пример


	Public Class CUpdateEvents: UpdateEvents

	    Public Sub OnBeginUpdate(Update: IMetabaseUpdate);

	    Var

	        Flag: IMetabaseUpdateProperty;

	    Begin

	        Debug.WriteLine("Обновление объектов репозитория");

	        Flag := Update.Properties.FindById("Ver");

	        If Flag <> Null Then

	            Flag.Value := "1.1";

	        End If;

	    End Sub OnBeginUpdate;


	    Public Sub OnAskConstraintsHandling(Update: IMetabaseUpdate; Node: IMetabaseUpdateNode;

	        Details: String; Var Handling: UpdateDataConstraintsHandlingType);

	    Begin

	        Handling := UpdateDataConstraintsHandlingType.KeepTableUnchanged;

	    End Sub OnAskConstraintsHandling;


	    Public Sub OnAskReflectRights(Var Cancel: Boolean);

	    Begin

	        Cancel := True;

	    End Sub OnAskReflectRights;


	    Public Sub OnUpdateObject(Update: IMetabaseUpdate; CurrentNode: IMetabaseUpdateNode;

	        Var Skip: Boolean);

	    Begin

	        If CurrentNode.NodeType = MetabaseUpdateNodeType.DeleteObject Then

	            Skip := True;

	        End If;

	    End Sub OnUpdateObject;


	    Public Sub OnEndUpdate(Update: IMetabaseUpdate);

	    Begin

	        Debug.WriteLine("Обновление объектов окончено");

	    End Sub OnEndUpdate;

	End Class CUpdateEvents;


Данный пример является шаблоном для модуля обновления. При применении
 обновления, содержащего данный модуль, будут осуществляться следующие
 проверки:


	- Если обновление содержит флаг обновления с идентификатором
	 "Ver", то для данного флага будет выставлено значение "1.1".
	 Обновляться будут только те объекты, для которых условие обновления
	 соответствует "Ver=1.1".


	- При нарушении целостности данных, обновление всего
	 объекта будет пропущено.


	- Обновление прав на объекты, для которых это необходимо,
	 будет осуществляться только на уровне платформы.


	- В обновлении будут пропущены элементы, осуществляющие
	 удаление объектов репозитория.


См. также:


[IMetabaseUpdateUserEvents](IMetabaseUpdateUserEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
