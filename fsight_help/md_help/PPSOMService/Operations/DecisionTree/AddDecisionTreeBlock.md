# AddDecisionTreeBlock: Операция

AddDecisionTreeBlock: Операция
-


**


# AddDecisionTreeBlock


## Синтаксис


AddDecisionTreeBlockResult AddDecisionTreeBlock(OdId
 tTree, AddDecisionTreeBlockArg tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция AddDecisionTreeBlock
 создаёт новый блок в рабочей области дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 определите настройки создаваемого блока. Моникёр может быть получен при
 выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будут параметры созданного блока.


## Пример


Ниже приведён пример создания нового блока условий в дереве решений.
 В запросе передаётся моникёр открытого экземпляра дерева решений, тип
 создаваемого блока и координаты верхнего левого угла блока. В ответе возвращаются
 параметры созданного блока.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddDecisionTreeBlock xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>Condition</type>  <x>100</x>  <y>100</y>  </tArg>
  </AddDecisionTreeBlock>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddDecisionTreeBlockResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>[![](../../minus.gif)](../../#)<block xmlns="****">
  <id>DT224525B786524CD6A3E93A6C19ABD4CD</id>  <name>Блок условий</name>  <type>Condition</type>  <x>100</x>  <y>100</y>  <viewText>0</viewText>  <width>154</width>  <height>40</height>  </block>
  </AddDecisionTreeBlockResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddDecisionTreeBlock" :
  {
   "tTree" :
    {
     "id" : "FDDEPGHMFLMLFOAEPIHADAAMMDDHFJLEJIDFFPMLJMAEDELM!M!S!CMPCCKHHMFLMLFOAEDEIBAJHJBDKBGLJEILHKIFGHADNADEAO"
    },
   "tArg" :
    {
     "type" : "Condition",
     "x" : "100",
     "y" : "100"
    }
  }
}

### JSON-ответ:


{
 "AddDecisionTreeBlockResult" :
  {
   "result" : "1",
   "block" :
    {
     "id" : "DT224525B786524CD6A3E93A6C19ABD4CD",
     "name" : "Блок условий",
     "type" : "Condition",
     "x" : "100",
     "y" : "100",
     "viewText" : "0",
     "width" : "154",
     "height" : "40"
    }
  }
}


public static AddDecisionTreeBlockResult AddDecisionTreeBlock(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddDecisionTreeBlock()
    {
        tTree = new OdId() { id = treeMoniker },
        tArg = new AddDecisionTreeBlockArg()
        {
            type = "Condition",
            x = 100,
            y = 100
        }
    };
    // Создание блока
    var result = somClient.AddDecisionTreeBlock(tAdd);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
