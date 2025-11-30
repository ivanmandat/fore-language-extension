# Открытие справочника с извлечением данных: Операция OpenDim

Открытие справочника с извлечением данных: Операция OpenDim
-


**


# Открытие справочника с извлечением данных


Ниже приведен пример использования операции [OpenDim](../OpenDim.htm)
 для открытия справочника репозитория. В запросе передается моникёр объекта,
 являющегося справочником и шаблон для извлечения информации о структуре
 и элементах справочника. В ответе приходит моникёр открытого справочника,
 а также информация о структуре и элементах, в соответствии с указанным
 шаблоном.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenDim xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>S1!M!116</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <openArgs />
[![](../../../minus.gif)](../../../#)<metaArg>
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <getDescr>true</getDescr>  <getAttrs>true</getAttrs>  </pattern>
[![](../../../minus.gif)](../../../#)<elsArg>
[![](../../../minus.gif)](../../../#)<pattern>
  <attributes>*</attributes>  <getParentKey>true</getParentKey>  <getImageIndex>true</getImageIndex>  </pattern>
  </elsArg>
  </metaArg>
  </tArg>
  </OpenDim>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenDimResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S3</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!S3</id>  </id>
[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<descr>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<cls>
  <k>1025</k>  </cls>
  </descr>
[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<it>
  <k>117</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <uniqueIndex>INDEX1</uniqueIndex>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>119</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>122</k>  <id>PARENT</id>  <n>Родитель</n>  <vis>1</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>177</k>  <id>CODE</id>  <n>Код</n>  <vis>1</vis>  <dt>1</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  <ident>1</ident>  <name>0</name>  <order>2</order>  </attrs>
  </data>
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<els>
[![](../../../minus.gif)](../../../#)<e>
  <n>Первый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Первый элемент</it>  <it>1</it>  <it>1</it>  <it>0</it>  <it>A000123</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Первый элемент**" />
  <it v="**1**" />
  <it v="**1**" />
  <it v="**0**" />
  <it v="**A000123**" />
  </ea>
  <k>1</k>  <h>1</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Второй элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Второй элемент</it>  <it>2</it>  <it>2</it>  <it>1</it>  <it>A000124</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Второй элемент**" />
  <it v="**2**" />
  <it v="**2**" />
  <it v="**1**" />
  <it v="**A000124**" />
  </ea>
  <k>2</k>  <h>1</h>  <o>1</o>  <p>1</p>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Третий элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Третий элемент</it>  <it>3</it>  <it>3</it>  <it>2</it>  <it>A000125</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Третий элемент**" />
  <it v="**3**" />
  <it v="**3**" />
  <it v="**2**" />
  <it v="**A000125**" />
  </ea>
  <k>3</k>  <h>0</h>  <o>2</o>  <p>2</p>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Четвертый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Четвертый элемент</it>  <it>4</it>  <it>4</it>  <it>0</it>  <it>A000126</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Четвертый элемент**" />
  <it v="**4**" />
  <it v="**4**" />
  <it v="**0**" />
  <it v="**A000126**" />
  </ea>
  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Пятый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Пятый элемент</it>  <it>5</it>  <it>5</it>  <it>0</it>  <it>A000127</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Пятый элемент**" />
  <it v="**5**" />
  <it v="**5**" />
  <it v="**0**" />
  <it v="**A000127**" />
  </ea>
  <k>5</k>  <h>0</h>  <o>0</o>  </e>
  </els>
[![](../../../minus.gif)](../../../#)<id>
  <id>S1!M!S!S3</id>  </id>
  </els>
  </meta>
  </OpenDimResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDim" :
  {
   "tObject" :
    {
     "id" : "S1!M!116"
    },
   "tArg" :
    {
     "openArgs" : "",
     "metaArg" :
      {
       "pattern" :
        {
         "obInst" : "false",
         "getDescr" : "true",
         "getAttrs" : "true"
        },
       "elsArg" :
        {
         "pattern" :
          {
           "attributes" : "*",
           "getParentKey" : "true",
           "getImageIndex" : "true"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDimResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!S3"
    },
   "meta" :
    {
     "id" :
      {
       "id" : "S1!M!S!S3"
      },
     "data" :
      {
       "descr" :
        {
         "k" : "116",
         "id" : "DIM_1",
         "n" : "Dim_1",
         "vis" : "1",
         "cls" :
          {
           "k" : "1025"
          }
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
        }
      },
     "els" :
      {
       "els" :
        {
         "e" :
          [
            {
             "n" : "Первый элемент",
             "a" :
              {
               "it" :
                [
                  "Первый элемент",
                  "1",
                  "1",
                  "0",
                  "A000123"
                ]
              },
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "Первый элемент"
                  },
                  {
                   "@v" : "1"
                  },
                  {
                   "@v" : "1"
                  },
                  {
                   "@v" : "0"
                  },
                  {
                   "@v" : "A000123"
                  }
                ]
              },
             "k" : "1",
             "h" : "1",
             "o" : "0"
            },
            {
             "n" : "Второй элемент",
             "a" :
              {
               "it" :
                [
                  "Второй элемент",
                  "2",
                  "2",
                  "1",
                  "A000124"
                ]
              },
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "Второй элемент"
                  },
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "1"
                  },
                  {
                   "@v" : "A000124"
                  }
                ]
              },
             "k" : "2",
             "h" : "1",
             "o" : "1",
             "p" : "1"
            },
            {
             "n" : "Третий элемент",
             "a" :
              {
               "it" :
                [
                  "Третий элемент",
                  "3",
                  "3",
                  "2",
                  "A000125"
                ]
              },
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "Третий элемент"
                  },
                  {
                   "@v" : "3"
                  },
                  {
                   "@v" : "3"
                  },
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "A000125"
                  }
                ]
              },
             "k" : "3",
             "h" : "0",
             "o" : "2",
             "p" : "2"
            },
            {
             "n" : "Четвертый элемент",
             "a" :
              {
               "it" :
                [
                  "Четвертый элемент",
                  "4",
                  "4",
                  "0",
                  "A000126"
                ]
              },
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "Четвертый элемент"
                  },
                  {
                   "@v" : "4"
                  },
                  {
                   "@v" : "4"
                  },
                  {
                   "@v" : "0"
                  },
                  {
                   "@v" : "A000126"
                  }
                ]
              },
             "k" : "4",
             "h" : "0",
             "o" : "0"
            },
            {
             "n" : "Пятый элемент",
             "a" :
              {
               "it" :
                [
                  "Пятый элемент",
                  "5",
                  "5",
                  "0",
                  "A000127"
                ]
              },
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "Пятый элемент"
                  },
                  {
                   "@v" : "5"
                  },
                  {
                   "@v" : "5"
                  },
                  {
                   "@v" : "0"
                  },
                  {
                   "@v" : "A000127"
                  }
                ]
              },
             "k" : "5",
             "h" : "0",
             "o" : "0"
            }
          ]
        },
       "id" :
        {
         "id" : "S1!M!S!S3"
        }
      }
    }
  }
}


public static OpenDimResult OpenDimensionEx(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDim()
    {
        tArg = new OpenDimArg()
        {
            metaArg = new GetDimMetadataArg()
            {
                elsArg = new GetDimElementsArg()
                {
                    pattern = new ElsPattern()
                    {
                        attributes = "*",
                        getParentKey = true
                    }
                },
                pattern = new DmMetadataPattern()
                {
                    getAttrs = true,
                    getDescr = true,
                    obInst = false
                }
            },
            openArgs = new DmOpenArgs()
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие справочника с извлечением метаданных
    var tResult = somClient.OpenDim(tOpen);
    return tResult;
}


См. также:


[OpenDim:
 Операция](../OpenDim.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
