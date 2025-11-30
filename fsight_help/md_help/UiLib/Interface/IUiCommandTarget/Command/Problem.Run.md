# Problem.Run

Problem.Run
-


# Команда Problem.Run


## Назначение


Запуск расчёта задачи моделирования.


## Особенности применения


Команда может применяться только задач моделирования.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «CONT», содержащий задачу моделирования
 с идентификатором «PROBLEM». Создайте форму и разместите на ней кнопку
 с идентификатором «Button1». Подключите системные сборки «Metabase», «Ui».


Пример является обработчиком события OnClick
 для «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    msKey: Integer;

	    problObj: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    msKey := mb.GetObjectKeyById("CONT");

	    problObj := mb.ItemByIdNamespace("PROBLEM", msKey);

	    Target := WinApplication.Instance.GetObjectTarget(problObj);

	    Target.Execute("Problem.Run", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет запущен расчёт задачи моделирования.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
