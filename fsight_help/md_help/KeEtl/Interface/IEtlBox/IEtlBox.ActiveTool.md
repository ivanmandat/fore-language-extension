# IEtlBox.ActiveTool

IEtlBox.ActiveTool
-


# IEtlBox.ActiveTool


## Синтаксис


ActiveTool: [WxTool](Andy.chm::/Enums/WxTool.htm);


## Описание


Свойство ActiveTool определяет
 активный инструмент рабочей области задачи ETL.


## Комментарии


По умолчанию свойству установлено значение
[WxTool.SelectOnly](Andy.chm::/Enums/WxTool.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


Добавьте ссылки на системные сборки: Andy, ETL.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EtlBox1.ActiveTool := WxTool.Hand;

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку в качестве активного
 инструмента будет включён указатель в виде руки, позволяющий изменять
 видимую область задачи ETL.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
