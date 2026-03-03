import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

const notifications = [
  {
    id: '1',
    type: 'task',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    isUnread: true,
  },
  {
    id: '2',
    type: 'user',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    isUnread: true,
  },
  {
    id: '3',
    type: 'user',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    isUnread: false, 
  },
  {
    id: '4',
    type: 'user',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    isUnread: true,
  },
  {
    id: '5',
    type: 'task',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    isUnread: false,
  },
  {
    id: '6',
    type: 'task',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    isUnread: false,
  }
];

const App = () => {

  const renderNotificationItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, item.isUnread ? styles.unreadBg : styles.readBg]}>
        <View style={styles.iconContainer}>
          {item.type === 'task' ? (
            <MaterialIcons name="check-circle" size={32} color="#3B4F8B" />
          ) : (
            <MaterialIcons name="group" size={32} color="#3B4F8B" />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông báo</Text>
      </View>

      {}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {}
      <View style={styles.bottomBar}>
        
        {}
        <TouchableOpacity style={styles.tabItem}>
          <MaterialIcons name="home" size={26} color="#BDBDBD" />
          <Text style={styles.tabText}>Trang chủ</Text>
        </TouchableOpacity>

        {}
        <TouchableOpacity style={styles.tabItem}>
          <FontAwesome5 name="location-arrow" size={22} color="#BDBDBD" />
          <Text style={styles.tabText}>Khám phá</Text>
        </TouchableOpacity>

        {}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fabButton}>
            <MaterialIcons name="add" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>

        {}
        <TouchableOpacity style={styles.tabItem}>
          <View>
            <MaterialIcons name="notifications" size={26} color="#3B4F8B" />
            <View style={styles.redBadge} />
          </View>
          <Text style={[styles.tabText, { color: '#333', fontWeight: '600' }]}>Thông báo</Text>
        </TouchableOpacity>

        {}
        <TouchableOpacity style={styles.tabItem}>
          <MaterialIcons name="person" size={26} color="#BDBDBD" />
          <Text style={styles.tabText}>Tài khoản</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 30,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  unreadBg: {
    backgroundColor: '#F4F8FB',
  },
  readBg: {
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginRight: 15,
    marginTop: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
    lineHeight: 20,
  },
  time: {
    fontSize: 13,
    color: '#888',
  },
  
  bottomBar: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center', 
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
  },
  tabText: {
    fontSize: 10,
    color: '#BDBDBD',
    marginTop: 4,
  },
  fabContainer: {
    width: 70,
    alignItems: 'center',
  },
  fabButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#3B4F8B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  redBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: '#fff',
  }
});

export default App;