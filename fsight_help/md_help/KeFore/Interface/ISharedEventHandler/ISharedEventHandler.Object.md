# ISharedEventHandler.Object

ISharedEventHandler.Object
-


# ISharedEventHandler.Object


## Синтаксис


Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Object определяет объект,
 который будет использоваться для обработки событий.


## Комментарии


[Обработчиками
 событий](UiDevEnv.chm::/04_NavigatorSetting/EventHandler.htm) могут являться только следующие объекты Fore:


	- сборка;


	- модуль;


	- форма.


Данное свойство актуально, если свойства [ISharedEventHandler.Enabled](ISharedEventHandler.Enabled.htm)
 принимает значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие модуля с идентификатором
 «EXPRESS_EVENTS», который будет служить обработчиком событий экспресс-отчетов.
 Модуль содержит специальный класс EventsClass,
 описание которого приведено на странице «[Обрабка
 событий](UiDevEnv.chm::/04_NavigatorSetting/EventHandler.htm)».


Добавьте ссылки на системные сборки: Fore, Metabase.


			Sub UserPRoc;

Var

    MB: IMetabase;

    SParams: ISharedParams;

    ShPar: IMetabaseObjectDescriptor;

    EventHandlers: ISharedEventHandlers;

    EventHandler: ISharedEventHandler;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим область глобальных переменных

    ShPar := MB.SpecialObject(MetabaseSpecialObject.SharedParams);

    // Получим параметры репозитория

    SParams := Shpar.Edit As ISharedParams;

    // Получим объект для работы с обработчиком событий отчетов

    EventHandlers := SParams.EventHandlers;

    // Будем использовать обработчик событий отчетов

    EventHandlers.Enabled := True;

    // Получим и активируем обработчик событий экспресс-отчетов

    EventHandler := EventHandlers.EventHandler(SharedEventHandlerType.ExpressReport);

    EventHandler.Enabled := True;

    // Подключим модуль для обработки событий

    EventHandler.Object := MB.ItemById("EXPRESS_EVENTS");

    // Установим класс модуля

    EventHandler.EventsClass := "EVENTSCLASS";

    // Сохраним изменения

    (SParams As ImetabaseObject).Save;

End Sub UserPRoc;


После выполнения примера для экспресс-отчетов будет установлен обработчик
 событий.


См. также:


[ISharedEventHandler](ISharedEventHandler.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
