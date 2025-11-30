# IEtlBox.View

IEtlBox.View
-


# IEtlBox.View


## Синтаксис


View: [IWxView](Andy.chm::/Interface/IWxView/IWxView.htm);


## Описание


Свойство View определяет настройки
 отображения рабочей области задачи ETL.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


Добавьте ссылки на системные сборки: Drawing, ETL.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EtlBox1.View.BackgroundColor := GxColor.FromKnownColor(GxKnownColor.Azure);

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку будет изменён
 цвет фона рабочей области задачи ETL.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
