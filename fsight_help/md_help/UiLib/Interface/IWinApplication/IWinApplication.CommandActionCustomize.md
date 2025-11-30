# IWinApplication.CommandActionCustomize

IWinApplication.CommandActionCustomize
-


# IWinApplication.CommandActionCustomize


## Синтаксис


CommandActionCustomize: [IUiCommandActionCustomize](../IUiCommandActionCustomize/IUiCommandActionCustomize.htm);


## Описание


Свойство CommandActionCustomize
 возвращает настройки для действий, которые доступны для различных объектов
 репозитория.


## Комментарии


Свойство возвращает коллекцию настроек действий, доступных для объектов
 репозитория. По умолчанию данная коллекция пуста, при этом параметры всех
 действий определяются системными настройками платформы по каждому типу
 объектов в отдельности. Вносимые в коллекцию изменения влияют на работу
 только текущего экземпляра приложения, после закрытия приложения все внесенные
 изменения будут сброшены.


В текущей реализации настройка параметров действий доступна для следующих
 объектов репозитория:


	- Экспресс-отчеты;


	- Регламентные отчеты;


	- Аналитические панели.


## Пример


Пример использования свойства приведен в примере для метода [IUiCommandActionCustomize.Add](../IUiCommandActionCustomize/IUiCommandActionCustomize.Add.htm).


См. также:


[IWinApplication](IWinApplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
