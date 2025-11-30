# IEtlTask.ActivateObject

IEtlTask.ActivateObject
-


# IEtlTask.ActivateObject


## Синтаксис


ActivateObject(Object: [IEtlObject](../IEtlObject/IEtlObject.htm);
 Value: Boolean);


## Параметры


Object. Объект, который требуется
 активировать/деактивировать;


Value. Признак активации объекта.
 Если параметр принимает значение True,
 то объект и все зависящие от него объекты будут активированы. Иначе -
 деактивированы.


## Описание


Метод ActivateObject используется
 для включения/исключения объекта из расчета цепочки.


## Комментарии


Для определения, исключен ли объект из расчета цепочки, используйте
 метод [IEtlTask.CanDeactivateObject](IEtlTask.CanDeactivateObject.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL. Для задачи ETL настроены цепочки операций.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Object1, Object2: IEtlObject;

	    ActiveChain, CanDeactiv: Boolean;

	Begin

	    MB := MetabaseClass.Active;

	    MbObj := MB.ItemById("ETL").Bind;

	    EtlTask := (MbObj) As IEtlTask;

	    // состояние цепочки объектов

	    ActiveChain := EtlTask.ActiveChain(3);

	    If ActiveChain = True Then

	        Debug.WriteLine("Цепочка объектов активна");

	        Else Debug.WriteLine("Цепочка объектов не активна");

	    End If;

	    // состояние объекта расчета цепочки

	    Object1 := EtlTask.Item(5);

	    CanDeactiv := EtlTask.CanDeactivateObject(Object1);

	    If CanDeactiv = False Then

	        Debug.WriteLine("Объект исключен из цепочки");

	        Else Debug.WriteLine("Объект включен в цепочку");

	    End If;

	    // исключить/включить объект из расчета цепочки

	    Object2 := EtlTask.Item(3);

	    CanDeactiv := EtlTask.CanDeactivateObject(Object2);

	    If CanDeactiv = False Then

	        EtlTask.ActivateObject(Object2, False);

	        Else EtlTask.ActivateObject(Object2, True);

	    End If;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 состоянии цепочки объектов (активна или неактивна) и о состоянии объекта
 цепочки расчета (включен или исключен объект в цепочку). Для задачи ETL
 будет исключен/включен объект расчета цепочки.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
