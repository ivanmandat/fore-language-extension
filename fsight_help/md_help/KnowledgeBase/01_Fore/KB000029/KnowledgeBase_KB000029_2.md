# Работа с формами и сборками репозитория продукта

Работа с формами и сборками репозитория продукта
-


# Работа с формами и сборками репозитория продукта «Форсайт. Аналитическая платформа»


Fore-формы, созданные в репозитории, можно запустить из разрабатываемого
 кода. Для этого в проекте должны быть добавлены ссылки на следующие сборки:


Сборки, необходимые для запуска всех форм/сборок:


	- Prognoz.Fore


	- Prognoz.Platform.Interop.Metabase


	- Prognoz.Platform.Interop.Ui


Перед запуском форм в коде необходимо выполнить следующий метод:


	- Prognoz.Platform.Interop.Ui.IUiWinApplication.CheckAfxState
	 - метод инициализирует системные переменные платформы, которые необходимы
	 для корректной работы объектов.


Данный метод необходимо выполнить единожды перед первым запуском какой-либо
 формы.


## Запуск Fore-форм


Для запуска Fore-формы необходимо для соответствующего объекта репозитория
 выполнить метод [Open](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.open.htm),
 либо [OpenWithParam](kesom.chm::/interface/imetabaseobjectdescriptor/imetabaseobjectdescriptor.openwithparam.htm):


IMetabaseObjectDescriptor ForeForm = Mb.ItemById["TestForm"];
ForeForm.Open(ForeForm.Params.CreateEmptyValues());
См. также:


[Работа
 в C#](Work_in_CSharp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
