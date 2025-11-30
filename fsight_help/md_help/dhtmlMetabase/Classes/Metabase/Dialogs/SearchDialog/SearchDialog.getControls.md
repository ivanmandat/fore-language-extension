# SearchDialog.getControls

SearchDialog.getControls
-


# SearchDialog.getControls


## Синтаксис


getControls ();


## Описание


Метод getControls возвращает
 элементы управления, входящий в состав диалога.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [SearchDialog](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog.htm)
 с наименованием «searchDialog» (см. «[Пример
 создания компонент SearchDialog](../../../../Components/Metabase/Dialogs/SearchDialog/SearchDialog_example.htm)»). Скроем кнопку «Дополнительно» (4-ый
 по счету элемент управления в диалоге):


searchDialog.getControls()[4].hide();


После выполнения примера в диалоге поиска будет скрыта кнопка «Дополнительно».


См. также:


[SearchDialog](SearchDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
