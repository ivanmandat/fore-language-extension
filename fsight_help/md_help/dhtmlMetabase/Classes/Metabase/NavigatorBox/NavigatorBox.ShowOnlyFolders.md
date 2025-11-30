# NavigatorBox.ShowOnlyFolders

NavigatorBox.ShowOnlyFolders
-


# NavigatorBox.ShowOnlyFolders


## Синтаксис


ShowOnlyFolders: Array;


## Описание


Свойство ShowOnlyFolders устанавливает
 коллекцию ключей папок, которые будут отображаться в компоненте.


## Комментарии


По умолчанию установлен пустой массив, то есть отображаются все папки,
 расположенные в корневой папке репозитория.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)». Установим набор папок, которые
 будут отображаться в компоненте:


navbox.setShowOnlyFolders([119, 51]);


После выполнения примера в компоненте будут отображаться только папки
 с ключами 119 и 51.


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
