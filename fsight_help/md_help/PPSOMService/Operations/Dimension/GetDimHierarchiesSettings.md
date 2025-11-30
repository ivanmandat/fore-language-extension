# GetDimHierarchiesSettings: Операция

GetDimHierarchiesSettings: Операция
-


**


# GetDimHierarchiesSettings


## Синтаксис


DimHierarchiesSettingsResult GetDimHierarchiesSettings(DmId
 tDim)


## Параметры


tDim. Моникёр
 экземпляра справочника.


## Описание


Операция GetDimHierarchiesSettings
 получает информацию об альтернативных иерархиях справочника.


## Комментарии


Для выполнения операции укажите в поле tDim
 моникёр справочника. Моникёр может быть получен при выполнении операции
 [OpenDim](OpenDim.htm).


Результатом операции будет информация о добавленных альтернативных иерархиях
 и их связях с указанным справочником.


## Пример


Ниже приведён пример получения информации об альтернативных иерархиях
 справочника. В запросе передаётся моникёр экземпляра справочника.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDimHierarchiesSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S6!M!S!DM1</id>  </tDim>
  </GetDimHierarchiesSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDimHierarchiesSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<hierarchies xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>SOURCE1</id>  <n>Dim_1 (En)</n>  <vis>1</vis>  <sourceDimKey>154</sourceDimKey>  <sourceDimCls>1025</sourceDimCls>  <originalDimKey>293441</originalDimKey>[![](../../minus.gif)](../../#)<sourceIndex>
  <k>156</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>1</vis>  </sourceIndex>
[![](../../minus.gif)](../../#)<attributesBindings>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>NAME</originalAttrId>  <sourceAttrId>NAME</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>ID</originalAttrId>  <sourceAttrId>ID</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>ORDER</originalAttrId>  <sourceAttrId>ORDER</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>PARENT</originalAttrId>  <sourceAttrId>PARENT</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>CODE</originalAttrId>  <sourceAttrId />
  </it>
  </attributesBindings>
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <k>117</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <uniqueIndex>INDEX1</uniqueIndex>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>119</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>122</k>  <id>PARENT</id>  <n>Родитель</n>  <vis>1</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  <ident>1</ident>  <name>0</name>  <order>2</order>  </attrs>
[![](../../minus.gif)](../../#)<indexes>
[![](../../minus.gif)](../../#)<it>
  <k>156</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  </it>
  </attrs>
  <primary>1</primary>  <unique>1</unique>  <useInSelection>0</useInSelection>  <caseSensitive>1</caseSensitive>  </it>
  </indexes>
  </it>
  </its>
[![](../../minus.gif)](../../#)<originalIndex>
  <k>155</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>1</vis>  </originalIndex>
[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <k>117</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <uniqueIndex>INDEX1</uniqueIndex>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>119</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>122</k>  <id>PARENT</id>  <n>Родитель</n>  <vis>1</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>177</k>  <id>CODE</id>  <n>Код</n>  <vis>1</vis>  <dt>1</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  <ident>1</ident>  <name>0</name>  <order>2</order>  </attrs>
[![](../../minus.gif)](../../#)<indexes>
[![](../../minus.gif)](../../#)<it>
  <k>155</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  </it>
  </attrs>
  <primary>1</primary>  <unique>1</unique>  <useInSelection>0</useInSelection>  <caseSensitive>1</caseSensitive>  </it>
  </indexes>
  </hierarchies>
  </GetDimHierarchiesSettingsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDimHierarchiesSettings" :
  {
   "tDim" :
    {
     "id" : "S6!M!S!DM1"
    }
  }
}

### JSON-ответ:


{
 "GetDimHierarchiesSettingsResult" :
  {
   "hierarchies" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "id" : "SOURCE1",
           "n" : "Dim_1 (En)",
           "vis" : "1",
           "sourceDimKey" : "154",
           "sourceDimCls" : "1025",
           "originalDimKey" : "293441",
           "sourceIndex" :
            {
             "k" : "156",
             "id" : "INDEX1",
             "n" : "Индекс1",
             "vis" : "1"
            },
           "attributesBindings" :
            {
             "it" :
              [
                {
                 "originalAttrId" : "NAME",
                 "sourceAttrId" : "NAME"
                },
                {
                 "originalAttrId" : "ID",
                 "sourceAttrId" : "ID"
                },
                {
                 "originalAttrId" : "ORDER",
                 "sourceAttrId" : "ORDER"
                },
                {
                 "originalAttrId" : "PARENT",
                 "sourceAttrId" : "PARENT"
                },
                {
                 "originalAttrId" : "CODE",
                 "sourceAttrId" : ""
                }
              ]
            },
           "attrs" :
            {
             "it" :
              [
                {
                 "k" : "117",
                 "id" : "NAME",
                 "n" : "Наименование",
                 "vis" : "1",
                 "dt" : "1",
                 "predefined" : "Name",
                 "dataDomain" : "0",
                 "nullable" : "1",
                 "hasHierarchy" : "0"
                },
                {
                 "k" : "118",
                 "id" : "ID",
                 "n" : "Идентификатор",
                 "vis" : "1",
                 "dt" : "2",
                 "uniqueIndex" : "INDEX1",
                 "predefined" : "Ident",
                 "dataDomain" : "0",
                 "nullable" : "1",
                 "hasHierarchy" : "0"
                },
                {
                 "k" : "119",
                 "id" : "ORDER",
                 "n" : "Порядок",
                 "vis" : "1",
                 "dt" : "2",
                 "predefined" : "Order",
                 "dataDomain" : "0",
                 "nullable" : "1",
                 "hasHierarchy" : "0"
                },
                {
                 "k" : "122",
                 "id" : "PARENT",
                 "n" : "Родитель",
                 "vis" : "1",
                 "dt" : "2",
                 "dataDomain" : "0",
                 "nullable" : "1",
                 "hasHierarchy" : "0"
                }
              ],
             "ident" : "1",
             "name" : "0",
             "order" : "2"
            },
           "indexes" :
            {
             "it" :
              {
               "k" : "156",
               "id" : "INDEX1",
               "n" : "Индекс1",
               "vis" : "1",
               "attrs" :
                {
                 "it" :
                  {
                   "k" : "118",
                   "id" : "ID",
                   "n" : "Идентификатор",
                   "vis" : "1"
                  }
                },
               "primary" : "1",
               "unique" : "1",
               "useInSelection" : "0",
               "caseSensitive" : "1"
              }
            }
          }
        ]
      },
     "originalIndex" :
      {
       "k" : "155",
       "id" : "INDEX1",
       "n" : "Индекс1",
       "vis" : "1"
      },
     "attrs" :
      {
       "it" :
        [
          {
           "k" : "117",
           "id" : "NAME",
           "n" : "Наименование",
           "vis" : "1",
           "dt" : "1",
           "predefined" : "Name",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "118",
           "id" : "ID",
           "n" : "Идентификатор",
           "vis" : "1",
           "dt" : "2",
           "uniqueIndex" : "INDEX1",
           "predefined" : "Ident",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "119",
           "id" : "ORDER",
           "n" : "Порядок",
           "vis" : "1",
           "dt" : "2",
           "predefined" : "Order",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "122",
           "id" : "PARENT",
           "n" : "Родитель",
           "vis" : "1",
           "dt" : "2",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "177",
           "id" : "CODE",
           "n" : "Код",
           "vis" : "1",
           "dt" : "1",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          }
        ],
       "ident" : "1",
       "name" : "0",
       "order" : "2"
      },
     "indexes" :
      {
       "it" :
        {
         "k" : "155",
         "id" : "INDEX1",
         "n" : "Индекс1",
         "vis" : "1",
         "attrs" :
          {
           "it" :
            {
             "k" : "118",
             "id" : "ID",
             "n" : "Идентификатор",
             "vis" : "1"
            }
          },
         "primary" : "1",
         "unique" : "1",
         "useInSelection" : "0",
         "caseSensitive" : "1"
        }
      }
    }
  }
}


public static DimHierarchiesSettingsResult GetHierarchies(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDimHierarchiesSettings()
    {
        tDim = new DmId() { id = moniker }
    };
    //Получение информации об альтернативных иерархиях
    var result = somClient.GetDimHierarchiesSettings(tGet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
