# IEtlBox.UpdateObjectsState

IEtlBox.UpdateObjectsState
-


# IEtlBox.UpdateObjectsState


## Синтаксис


UpdateObjectsState;


## Описание


Метод UpdateObjectsState обновляет
 отображение состояния активности цепочек расчёта.


## Комментарии


Метод актуально использовать, если в коде осуществляется изменение состояний
 цепочек расчёта с помощью метода [IEtlTask.ActiveChain](../IEtlTask/IEtlTask.ActiveChain.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


Добавьте ссылку на системную сборку ETL.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Task: IEtlTask;

	Begin

	    Task := UiEtlObject1.EtlTask;

	    Task.ActiveChain(Task.Links.Item(0).ConnCompId) := False;

	    EtlBox1.UpdateObjectsState;

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку из общего списка
 выполняемых цепочек будет исключена цепочка, в которую входит первая связь
 между объектами. После этого будет обновлено визуальное оформление всех
 объектов задачи ETL.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
