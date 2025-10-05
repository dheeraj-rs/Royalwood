"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Package, Truck, CheckCircle, Clock, Eye, Download } from 'lucide-react';
import SubHeader from '@/components/SubHeader';

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders = [
    {
      id: 'RW123456',
      date: '2024-01-15',
      status: 'delivered',
      total: 4299.99,
      items: [
        { name: 'Royal Oak Dining Set', quantity: 1, price: 2899 },
        { name: 'Premium Leather Sofa', quantity: 1, price: 1400.99 }
      ],
      tracking: 'TRK789012345',
      deliveryDate: '2024-01-28',
      shippingAddress: '123 Main St, New York, NY 10001'
    },
    {
      id: 'RW123457',
      date: '2024-01-20',
      status: 'in_transit',
      total: 1899.00,
      items: [
        { name: 'Executive Desk Collection', quantity: 1, price: 1899 }
      ],
      tracking: 'TRK789012346',
      estimatedDelivery: '2024-02-05',
      shippingAddress: '456 Oak Ave, Brooklyn, NY 11201'
    },
    {
      id: 'RW123458',
      date: '2024-01-25',
      status: 'processing',
      total: 1299.00,
      items: [
        { name: 'Modern Platform Bed', quantity: 1, price: 1299 }
      ],
      estimatedDelivery: '2024-02-10',
      shippingAddress: '789 Pine St, Queens, NY 11375'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="text-yellow-400" size={20} />;
      case 'in_transit':
        return <Truck className="text-blue-400" size={20} />;
      case 'delivered':
        return <CheckCircle className="text-green-400" size={20} />;
      default:
        return <Package className="text-gray-400" size={20} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'in_transit':
        return 'In Transit';
      case 'delivered':
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'in_transit':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'delivered':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SubHeader />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">My Orders</h1>
          <p className="text-gray-300">Track and manage your furniture orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="mx-auto mb-4 text-gray-400" size={64} />
            <h2 className="text-2xl font-semibold text-white mb-4">No Orders Yet</h2>
            <p className="text-gray-400 mb-8">You haven&apos;t placed any orders yet</p>
            <a
              href="/catalog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
            >
              Browse Catalog
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Order #{order.id}</h3>
                        <p className="text-gray-400 text-sm">
                          Placed on {new Date(order.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-medium">{getStatusText(order.status)}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">${order.total.toFixed(2)}</div>
                        <div className="text-sm text-gray-400">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                        <div>
                          <span className="text-white font-medium">{item.name}</span>
                          <span className="text-gray-400 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="text-white font-semibold">${item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {order.tracking && (
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Tracking Number</div>
                        <div className="text-white font-medium">{order.tracking}</div>
                      </div>
                    )}

                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        {order.status === 'delivered' ? 'Delivered On' : 'Estimated Delivery'}
                      </div>
                      <div className="text-white font-medium">
                        {order.deliveryDate
                          ? new Date(order.deliveryDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                          : new Date(order.estimatedDelivery!).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        }
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-1">Shipping Address</div>
                      <div className="text-white font-medium text-sm">{order.shippingAddress}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Eye size={16} className="mr-2" />
                      {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                    </button>

                    {order.tracking && (
                      <button onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                        className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                        <Truck size={16} className="mr-2" />
                        Track Package
                      </button>
                    )}

                    {order.status === 'delivered' && (
                      <button className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                        <Download size={16} className="mr-2" />
                        Download Invoice
                      </button>
                    )}
                  </div>

                  {selectedOrder === order.id && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Order Timeline</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="text-green-400" size={16} />
                              <div>
                                <div className="text-white text-sm">Order Placed</div>
                                <div className="text-gray-400 text-xs">{new Date(order.date).toLocaleDateString()}</div>
                              </div>
                            </div>

                            {order.status !== 'processing' && (
                              <div className="flex items-center space-x-3">
                                <CheckCircle className="text-green-400" size={16} />
                                <div>
                                  <div className="text-white text-sm">Order Processed</div>
                                  <div className="text-gray-400 text-xs">
                                    {new Date(new Date(order.date).getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            )}

                            {order.status === 'delivered' && (
                              <div className="flex items-center space-x-3">
                                <CheckCircle className="text-green-400" size={16} />
                                <div>
                                  <div className="text-white text-sm">Delivered</div>
                                  <div className="text-gray-400 text-xs">{new Date(order.deliveryDate!).toLocaleDateString()}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-300">Need help with this order?</p>
                            <div className="space-y-1">
                              <div className="text-white">📞 +1 (555) 123-4567</div>
                              <div className="text-white">✉️ orders@royalwood.com</div>
                              <div className="text-gray-400">Reference Order #{order.id}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;