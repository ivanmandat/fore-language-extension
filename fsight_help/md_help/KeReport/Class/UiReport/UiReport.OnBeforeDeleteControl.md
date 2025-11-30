# UiReport.OnBeforeDeleteControl

UiReport.OnBeforeDeleteControl
-


# UiReport.OnBeforeDeleteControl


## Синтаксис


OnBeforeDeleteControl(Sender: Object; Args: [IUiPrxControlCancelEventArgs](../../Interface/IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeDeleteControl
 наступает перед удалением элемента управления.


## Комментарии


При изменении значения элемента управления регламентного отчета наступает
 событие [UiReport.OnChangeControlValue](UiReport.OnChangeControlValue.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 UiReport с идентификатором UiReport1 и визуальный компонент, в качестве
 источника данных для которого указан компонент UiReport1. В качестве источника
 данных для компонента UiReport1 укажите регламентный отчет, на активном
 листе которого размещены элементы управления.


Пример является обработчиком события OnBeforeDeleteControl для компонента
 UiReport1.


Добавьте ссылку на системную сборку Ui.


	Sub UiReport1OnBeforeDeleteControl(Sender: Object; Args: IUiPrxControlCancelEventArgs);

	Begin

	    If Not WinApplication.ConfirmationBox("Удалить элемент управления?") Then

	        Args.Cancel := True;

	    End If;

	End Sub UiReport1OnBeforeDeleteControl;


До удаления элемента управления будет выдан запрос на подтверждение
 выполняемого действия. При положительном ответе элемент управления будет
 удалён, при отрицательном - нет.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
