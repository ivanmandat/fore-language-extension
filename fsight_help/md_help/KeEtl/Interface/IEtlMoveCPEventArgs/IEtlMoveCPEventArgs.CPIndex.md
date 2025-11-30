# IEtlMoveCPEventArgs.CPIndex

IEtlMoveCPEventArgs.CPIndex
-


# IEtlMoveCPEventArgs.CPIndex


## Синтаксис


CPIndex: Integer;


## Описание


Свойство CPIndex возвращает
 индекс точки соединения, которую необходимо переместить.


## Комментарии


Линии имеют две точки: начальная точка с индексом 0 и конечная точка
 с индексом 1.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL. Для
 формы создан обработчик события OnCreate,
 для компонента «EtlBox1» созданы обработчики событий OnBeforeMoveCP
 и OnAfterMoveCP.


Добавьте ссылки на системные сборки: Andy, ETL.


	Class SAMPLEForm: Form

	    UiEtlObject1: UiEtlObject;

	    EtlBox1: EtlBox;


	    Sub SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

	    Begin

	        EtlBox1.ActiveTool := WxTool.Pointer;

	    End Sub SAMPLEFormOnCreate;


	    Sub EtlBox1OnBeforeMoveCP(Sender: Object; Args: IEtlMoveCPEventArgs);

	    Begin

	        If Args.CPIndex = 0 Then

	            Args.Cancel := True

	        End If;

	        Debug.WriteLine("Фигура: " + Args.Shape.Id);

	    End Sub EtlBox1OnBeforeMoveCP;


	    Sub EtlBox1OnAfterMoveCP(Sender: Object; Args: IEtlAttachCPEventArgs);

	    Begin

	        Debug.WriteLine("Фигура: " + Args.ShapeToAttach.Id + ". Конечная точка: " + Args.CPIndexToAttach.ToString);

	    End Sub EtlBox1OnAfterMoveCP;

	End Class SAMPLEForm;


В результате выполнения примера для компонента «EtlBox1» будет включён
 режим указателя, в котором можно изменять привязки объектов. Если осуществляется
 попытка переместить точку с индексом 0 (т.е. начальную точку), то перемещение
 будет запрещено. Идентификаторы фигур и точка фигуры, с которой осуществляется
 связь, будут выведены в консоль среды разработки.


См. также:


[IEtlMoveCPEventArgs](IEtlMoveCPEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
