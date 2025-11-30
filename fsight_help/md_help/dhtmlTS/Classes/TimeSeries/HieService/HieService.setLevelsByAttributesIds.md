# HieService.setLevelsByAttributesIds

HieService.setLevelsByAttributesIds
-


# HieService.setLevelsByAttributesIds


## Синтаксис


setLevelsByAttributesIds (attributesIds, hie, callback);


## Параметры


attributesIds. Задает массив с идентификаторами метаатрибутов;


hie. Задает иерархию рядов;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод setLevelsByAttributesIds устанавливает уровни дерева в соответствии с порядком метаатрибутов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и в обработчике события открытия документа добавить следующий код:


    var setLevelsByAttributesIdsButt = new PP.Ui.Button({
      ParentNode: document.body, //Родительский узел DOM
      Content: "Установить уровни", //Подпись
      Click: PP.Delegate(onClick)
     });

    function onClick()
    {

     //Получаем компонент для отображения и управления атрибутами рабочей книги
     var breadcrumb = workbookBox.getDataView().getBreadcrumb();
     //breadcrumb.refreshAll();
     var hie = breadcrumb.getHierarchy();
     //Получаем сервис для работы с иерархией базы данных временных рядов
     var hieService = tsService.getHieService();
     //Устанавливаем уровни дерева в соответствии с порядком метаатрибутов
     hieService.setLevelsByAttributesIds([], hie, PP.Delegate(onResponse));
    }
    function onResponse(sender, args)
    {
     //Обновляем мастер управления атрибутами рабочей книги
     if (workbookBox.getPropertyBarView().getNavBreadcrumb())
     {

      workbookBox.getPropertyBarView().getNavBreadcrumb().refresh();
     }
     //Обновляем навигационную цепочку
     workbookBox.getDataView().getBreadcrumb().setSelectedAttributes([], false);
     workbookBox.getDataView().getBreadcrumb().refreshAll();
    }

После выполнения примера на html-странице будет размещена кнопка с наименованием «Установить уровни». По нажатию на кнопку будут установлены уровни дерева в соответствии с порядком метаатрибутов.


См. также:


[HieService](HieService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
